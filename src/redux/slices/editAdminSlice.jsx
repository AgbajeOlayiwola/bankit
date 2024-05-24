import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const editAdminSlice = createSlice({
  name: "editAdmin",
  initialState,
  reducers: {
    setEditAdmin: (state, { payload }) => {
      return payload
    },
    clearEditAdmin: () => {
      return {}
    },
  },
})

const { reducer, actions } = editAdminSlice
export const { setEditAdmin, clearEditAdmin } = actions
export default reducer
