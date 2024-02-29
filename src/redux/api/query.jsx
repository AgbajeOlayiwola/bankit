import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const baseUrl = "https://bankit-two.vercel.app/api/v1/"
export const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token
      console.log(token)

      // headers.set('x-api-key', `${process.env.BASE_KEY}`);
      headers.set("Accept", "application/json")
      headers.set("Content-Type", "application/json")
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllBillers: builder.query({
      query: () => {
        return {
          url: "billings",
        }
      },
    }),
    getDataBundles: builder.query({
      query: () => {
        return {
          url: "billings/databundle/bundles",
        }
      },
    }),
    getAdminManagmentByID: builder.query({
      query: (id) => {
        return {
          url: `management/${id}`,
        }
      },
    }),
    getAdminManagment: builder.query({
      query: () => {
        return {
          url: "management",
        }
      },
    }),
    deleteAdminManagmentByID: builder.query({
      query: (id) => {
        return {
          url: `management/edit/profile/${id}`,
        }
      },
    }),
    getCurrentUser: builder.query({
      query: (id) => {
        return {
          url: `users/current-user`,
        }
      },
    }),
  }),
})

export const {
  useGetAllBillersQuery,
  useGetAdminManagmentByIDQuery,
  useGetAdminManagmentQuery,
  useGetCurrentUserQuery,
} = queryApi
