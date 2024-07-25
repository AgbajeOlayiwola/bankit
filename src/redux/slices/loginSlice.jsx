import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      return payload
    },
    clearLogin: () => {
      return {}
    },
  },
})

const { reducer, actions } = loginSlice
export const { setLogin, clearLogin } = actions
export default reducer
