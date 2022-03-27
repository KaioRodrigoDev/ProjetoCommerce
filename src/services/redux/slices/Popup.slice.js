import { createSlice } from '@reduxjs/toolkit'

const PopupSlice = createSlice({
  name: 'popup',
  initialState: {
    Open: false,
    Data: null
  },
  reducers: {
    TogglePopup(state, { payload }) {
      return {
        ...state,
        Data: payload,
        Open: state.Open ? false : true
      }
    }
  }
})

export const { TogglePopup } = PopupSlice.actions
export default PopupSlice.reducer
