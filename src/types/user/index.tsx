export type UserStateType = {
  user: UserType | undefined
  languageType: LanguageType
  isLoggedIn: boolean;
  userToken?: OauthTokenType;

}

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

