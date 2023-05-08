import { ApiShowResType } from "../request";

export type UserStateType = {
	user: UserType | undefined
	languageType: LanguageType
	isLoggedIn: boolean;
	userToken?: OauthTokenType;
	apiError?: string;

}

export type SignInParamsType = {
	phoneNumber: string;
	password: string;
};
export type SignInResponseType = ApiShowResType<SignInSuccessType>;

export type SignInSuccessType = {
	user: UserType;
	token: OauthTokenType;
};

export interface UserType {
	id: number;
	email?: string;
	firstName?: string;
	lastName?: string;
	initials?: string;
	profileImage?: string;
	notifications?: any[];
	avatar?: string;
	phoneNumber?: string;
	status?: 'active' | 'inactive';
	resetPasswordToken?: string;
	token?: OauthTokenType;
	reachedOnboardingScreen?: boolean;
	permissionRole?: 'user' | 'root';
}


export enum LanguageType {
	VN = 'vn',
	EN = 'en'
}

export interface OauthTokenType {
	accessToken: string;
	tokenType: 'Bearer';
	expiresIn: number;
	refreshToken: string;
	createdAt: number;
}

export interface SignInPayloadType {
	user: UserType;
	token: OauthTokenType;
}

export type AddUserProps = {
	isOpen: boolean,
	onCancel: () => void,
	form: any
	onFinish: (values: any) => void
}

export type  FormUserProps = {
	onFinish: (values: any) => void
	form: any
}