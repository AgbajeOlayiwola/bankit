import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
const baseUrl = "https://bankit-two.vercel.app/api/v1/"
export const mutationApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token

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
    registerNewUser: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    sendOtp: builder.mutation({
      query: (data) => ({
        url: "auth/send-phone-verification-code",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "auth/verify-phone-number",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "auth/change-password",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    setUserPin: builder.mutation({
      query: (data) => ({
        url: "users/set-pin",
        method: "POST",
        body: data,
      }),
    }),
    userChangePin: builder.mutation({
      query: (data) => ({
        url: "users/change-pin",
        method: "POST",
        body: data,
      }),
    }),
    usersLivenessCheck: builder.mutation({
      query: (data) => ({
        url: "users/liveness-check",
        method: "POST",
        body: data,
      }),
    }),
    usersFinancialHabit: builder.mutation({
      query: (data) => ({
        url: "users/financial-habit",
        method: "POST",
        body: data,
      }),
    }),
    vrifyUsrEmail: builder.mutation({
      query: (data) => ({
        url: "users/verify-email",
        method: "POST",
        body: data,
      }),
    }),
    vrifyUsrId: builder.mutation({
      query: (data) => ({
        url: "users/idverification",
        method: "POST",
        body: data,
      }),
    }),
    upgradeToTierOne: builder.mutation({
      query: (data) => ({
        url: "users/upgrade-tierOne",
        method: "POST",
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "management/admin",
        method: "POST",
        body: data,
      }),
    }),
    updateAdmin: builder.mutation({
      query: (data) => ({
        url: `management/edit/profile/${data?.id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
})

export const {
  useUpdateAdminMutation,
  useVrifyUsrIdMutation,
  useUpgradeToTierOneMutation,
  useCreateAdminMutation,
  useUserChangePinMutation,
  useUsersFinancialHabitMutation,
  useSetUserPinMutation,
  useVrifyUsrEmailMutation,
  usersLivenessCheck,
  useRegisterNewUserMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useLoginMutation,
} = mutationApi
