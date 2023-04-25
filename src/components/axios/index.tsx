import { AxiosInstance } from 'axios';
import { AppDispatch } from '../../store';
import { OauthTokenType } from "../../types/user";
import CamelCaseConverter from "../convert";

let isFetching = false;
// Array of axios instances that are waiting for a token to be refreshed
let subscribers: Array<(token: OauthTokenType) => void> = [];

function setupAxiosInterceptors(
	userSlice: any,
	axios: AxiosInstance,
	dispatch: AppDispatch,
	store: any,
) {
	setupAuthorizationInterceptor(userSlice, axios, dispatch, store);
	setupRefreshTokenInterceptor(userSlice, axios, dispatch, store);
}

// Set user token in all requests automatically
function setupAuthorizationInterceptor(
	userSlice: any,
	http: AxiosInstance,
	dispatch: AppDispatch,
	store: any,
) {
	http.interceptors.request.use(async (config: any) => {
		const nConfig = config;
		const state: any = store.getState();
		const { userToken } = state.user;
		if (userToken) {
			const authHeader = getAuthHeader(userToken);
			nConfig.headers.Authorization = authHeader;
		}
		return nConfig;
	});
	// Handle 403 Forbidden authorization errors
	http.interceptors.response.use(
		(response: any) => {
			return response;
		},
		async (error: any): Promise<any> => {
			const { status } = error.response;
			if (status === 403) {
				// Logout and redirect to login page
				logoutUser(userSlice, dispatch);
			}
			return Promise.reject(error);
		},
	);
}

function onRefreshed(token: OauthTokenType) {
	subscribers.map((cb) => cb(token));
	subscribers = [];
}

function subscribeTokenRefresh(cb: (token: OauthTokenType) => void) {
	subscribers.push(cb);
}

async function fetchNewToken(
	userSlice: any,
	http: AxiosInstance,
	dispatch: AppDispatch,
	store: any,
) {
	isFetching = true;
	try {
		const state: any = store.getState();
		const { userToken } = state.user;
		const { refreshToken } = userToken;
		// Succeeded in refreshing token
		const token = await refreshAccessToken(userSlice, http, refreshToken);
		await dispatch(userSlice.actions.setToken(token));
		onRefreshed(token);
	} catch (err) {
		// Failed to refresh token
		logoutUser(userSlice, dispatch);
	} finally {
		isFetching = false;
	}
}

// Handle oauth refresh tokens.
// If a request fails with a 401 we try to refresh the user's token.
// If it still fails we fail like usual.
function setupRefreshTokenInterceptor(
	userSlice: any,
	http: AxiosInstance,
	dispatch: AppDispatch,
	userToken?: OauthTokenType,
) {
	http.interceptors.response.use(
		(response: any) => {
			return response;
		},
		async (error: any): Promise<any> => {
			const originalRequest = error.config;
			const { status } = error.response;
			if (status === 401) {
				// First request that triggers a 401 error will start the refresh token flow.
				if (!isFetching) {
					fetchNewToken(userSlice, http, dispatch, userToken);
				}

				// Subscribe so that we can send the request when the token is refreshed
				return new Promise((resolve) => {
					subscribeTokenRefresh((token: OauthTokenType) => {
						originalRequest.headers.Authorization = getAuthHeader(token);
						resolve(http(originalRequest));
					});
				});
			}
			return Promise.reject(error);
		},
	);
}

// Refresh a user's accessToken using their refreshToken
async function refreshAccessToken(
	userSlice: any,
	http: AxiosInstance,
	refreshToken: string,
): Promise<OauthTokenType> {
	try {
		const res = await http.post('oauth/token', {
			grant_type: 'refresh_token',
			client_id: process.env.REACT_APP_ECOONE_CLIENT_ID,
			refresh_token: refreshToken,
		});
		const parsedData = snakeToCamel(res.data);
		const { token } = parsedData.data;
		return Promise.resolve(token);
	} catch (err) {
		return Promise.reject(err);
	}
}

// Convert snake_case to camelCase
function snakeToCamel(object: any): any {
	return CamelCaseConverter.convertKeys('camel', object);
}

// Get the auth header required for authenticated requests based on the userToken.
// If it's expired we refresh it using the refreshToken.
function getAuthHeader(userToken: OauthTokenType): string {
	const { tokenType, accessToken } = userToken;
	const authHeader = `${tokenType || 'Bearer'} ${accessToken}`;
	return authHeader;
}

// Logout the user in Redux and navigate to "Auth" flow
function logoutUser(userSlice: any, dispatch: AppDispatch) {
	dispatch(userSlice.actions.signOut());
}

export default setupAxiosInterceptors;
