import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const baseUrl = "https://api.staging.bankitafrica.com"

// const baseUrl = 'https://bankit-two.vercel.app/api/v1';

export const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.token
      headers.set("x-api-key", "aXA7DdqHKemWwXO5maT1hiLuWbOYTyFB")
      headers.set("Accept", "application/json")
      headers.set("Content-Type", "application/json")
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "user",
      }),
    }),
    sendMailOtp: builder.query({
      query: () => ({
        url: "users/send-email-verification-code",
      }),
    }),
    getAccount: builder.query({
      query: () => ({
        url: "bank-account",
      }),
    }),
    getDataProviders: builder.query({
      query: () => ({
        url: "billings/databundle/bundles",
      }),
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "users/current-user",
      }),
    }),
    getTxName: builder.query({
      query: (body) => ({
        url: body?.username?.length
          ? `bank/account/details?username=${body?.username}`
          : `bank/account/details?bank_code=${body?.bank_code}&account_number=${body?.account_number}`,
      }),
    }),
    getBanksList: builder.query({
      query: () => ({
        url: "bank/list",
      }),
    }),
    getKycStatus: builder.query({
      query: () => ({
        url: "kyc/status",
      }),
    }),
    getBillerCats: builder.query({
      query: () => ({
        url: "biller/category/list",
      }),
    }),
    getBeneficiaries: builder.query({
      query: () => ({
        url: "transaction/beneficiary/fetch/all",
      }),
    }),
    getBillers: builder.query({
      query: (id) => ({
        url: `biller/list?category_code=${id}`,
      }),
    }),
    getProducts: builder.query({
      query: (id) => ({
        url: `biller/product/list?biller_code=${id}`,
      }),
    }),
    getTxHistory: builder.query({
      query: ({ total, last }) => ({
        url: `transaction/fetch?result_per_page=${total}&last_record_index=${last}`,
      }),
    }),
  }),
})

export const {
  useGetTxHistoryQuery,
  useGetBeneficiariesQuery,
  useLazyGetBeneficiariesQuery,
  useLazyGetBillerCatsQuery,
  useLazyGetTxHistoryQuery,
  useLazyGetProductsQuery,
  useLazyGetTxNameQuery,
  useGetKycStatusQuery,
  useLazyGetKycStatusQuery,
  useGetDataProvidersQuery,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useLazySendMailOtpQuery,
  useGetAccountQuery,
  useGetBillersQuery,
  useLazyGetBillersQuery,
  useLazyGetCurrentUserQuery,
  useLazyGetAccountQuery,
  useGetBanksListQuery,
  useGetBillerCatsQuery,
} = queryApi
