import Api from '../index'
import { SignInParamsType, SignInResponseType, SignInSuccessType } from "../../types/user";

export default class UserApi extends Api {
  path: string

  constructor() {
    super()
    this.path = 'users'
  }

  async signIn(params: SignInParamsType): Promise<SignInResponseType> {
    const res = await this.request<SignInSuccessType>({
      path: 'oauth/token',
      method: 'POST',
      params: {
        grant_type: 'password',
        client_id: process.env.REACT_APP_ECOONE_CLIENT_ID,
        ...params
      }
    })
    return res
  }
}
