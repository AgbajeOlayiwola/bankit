import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const compProfileSlice = createSlice({
  name: "compProfile",
  initialState,
  reducers: {
    setCompProfile: (state, { payload }) => {
      return payload
    },
    clearCompProfile: () => {
      return {}
    },
  },
})

const { reducer, actions } = compProfileSlice
export const { setCompProfile, clearCompProfile } = actions
export default reducer
