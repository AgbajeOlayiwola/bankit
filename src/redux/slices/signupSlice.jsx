import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignup: (state, { payload }) => {
      return payload
    },
    clearSignup: () => {
      return {}
    },
  },
})

const { reducer, actions } = signupSlice
export const { setSignup, clearSignup } = actions
export default reducer
