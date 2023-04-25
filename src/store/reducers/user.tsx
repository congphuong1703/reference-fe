import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  LanguageType,
  OauthTokenType,
  SignInParamsType,
  SignInPayloadType,
  UserStateType
} from '../../types/user'
import { signIn } from '../actions/user'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../index'

const initialState: UserStateType = {
  user: undefined,
  userToken: undefined,
  isLoggedIn: false,
  languageType: LanguageType.VN
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<OauthTokenType>) {
      state.userToken = action.payload
      state.isLoggedIn = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<SignInPayloadType>) => {
        state.user = action.payload.user
        state.userToken = action.payload.token
        state.isLoggedIn = true
      }
    )
    builder.addCase(signIn.rejected, (state, action: PayloadAction<any>) => {
      state.apiError = action.payload
    })
  }
})
export const useUserState = () => {
  const userState = useSelector(
    (state: RootState) => state.user
  ) as UserStateType
  const dispatch = useAppDispatch()
  const userActions = {
    signIn: (params: SignInParamsType) => dispatch(signIn(params))
  }

  return [userState, userActions] as any
}
export default userSlice;
