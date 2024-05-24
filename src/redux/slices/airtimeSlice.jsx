import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const airtimeSlice = createSlice({
  name: "airtime",
  initialState,
  reducers: {
    setAirtime: (state, { payload }) => {
      return payload
    },
    clearAirtime: () => {
      return {}
    },
  },
})

const { reducer, actions } = airtimeSlice
export const { setAirtime, clearAirtime } = actions
export default reducer
