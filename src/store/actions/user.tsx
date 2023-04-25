import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInParamsType, SignInPayloadType } from "../../types/user";
import UserApi from "../../controllers/user";

export const signIn = createAsyncThunk(
	'user/signIn',
	async (params: SignInParamsType, { rejectWithValue }) => {
		const userApi = new UserApi();
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const res = await userApi.signIn(params);

		if (res.status === 'success') {
			return Promise.resolve({
				user: res.result.data.user,
				token: res.result.data.token,
			} as SignInPayloadType);
		}
		return rejectWithValue(res.errors);
	},
)