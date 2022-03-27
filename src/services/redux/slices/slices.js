import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    userData: null
  },
  reducers: {
    updateUserData(state, { payload }) {
      console.log(payload)
      return {
        ...state,
        userData: payload.userData || state.userData,
        isLogged: payload.isLogged || state.isLogged
      }
    }
  }
})

export const { updateUserData } = userSlice.actions
export default userSlice.reducer
