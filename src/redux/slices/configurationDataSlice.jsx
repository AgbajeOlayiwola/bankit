import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const configdataSlice = createSlice({
  name: "configdata",
  initialState,
  reducers: {
    setConfigdata: (state, { payload }) => {
      return payload
    },
    clearConfigdata: () => {
      return {}
    },
  },
})

const { reducer, actions } = configdataSlice
export const { setConfigdata, clearConfigdata } = actions
export default reducer
