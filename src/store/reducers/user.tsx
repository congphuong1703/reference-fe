import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LanguageType, OauthTokenType, UserStateType } from '../../types/user'
import { signIn } from '../actions/user'
import { useSelector } from 'react-redux'

const initialState: UserStateType = {
  user: undefined,
  userToken: undefined,
  isLoggedIn: false,
  languageType: LanguageType.VN
}

export const userSlice = createSlice({
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
  }
})
export const useUserState = () => {
  const userState = useSelector(
    (state: RootState) => state.user
  ) as UserStateType
  const dispatch = useAppDispatch()

  return [userState, userActions] as any
}
