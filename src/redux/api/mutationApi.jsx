import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const baseUrl = "https://api.staging.bankitafrica.com"

// const baseUrl = 'https://bankit-two.vercel.app/api/v1';

export const mutationApi = createApi({
  reducerPath: "onboardingApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token
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
    signupInit: builder.mutation({
      query: (body) => {
        return {
          url: "auth/signup/initiate",
          method: "POST",
          body,
        }
      },
    }),
    login: builder.mutation({
      query: (body) => {
        return {
          url: "auth/login",
          method: "POST",
          body,
        }
      },
    }),
    verifyPhone: builder.mutation({
      query: (body) => {
        return {
          url: "auth/signup/phone/verify",
          method: "POST",
          body,
        }
      },
    }),
    verifyMFA: builder.mutation({
      query: (body) => {
        return {
          url: "auth/mfa",
          method: "POST",
          body,
        }
      },
    }),
    verifyEmail: builder.mutation({
      query: (body) => {
        return {
          url: "user/email/verify",
          method: "POST",
          body,
        }
      },
    }),
    sendPhoneOtp: builder.mutation({
      query: (body) => {
        return {
          url: "auth/send-phone-verification-code",
          method: "POST",
          body,
        }
      },
    }),
    signUp: builder.mutation({
      query: (body) => {
        return {
          url: "auth/signup/profile",
          method: "PATCH",
          body,
        }
      },
    }),
    forgotPassword: builder.mutation({
      query: (body) => {
        return {
          url: "auth/forgot-passcode",
          method: "POST",
          body,
        }
      },
    }),
    resetPassword: builder.mutation({
      query: (body) => {
        return {
          url: "auth/forgot-password",
          method: "POST",
          body,
        }
      },
    }),
    setPin: builder.mutation({
      query: (body) => {
        return {
          url: "user/transaction-pin",
          method: "POST",
          body,
        }
      },
    }),
    checkAlias: builder.mutation({
      query: (body) => {
        return {
          url: "username/check",
          method: "POST",
          body,
        }
      },
    }),
    changePin: builder.mutation({
      query: (body) => {
        return {
          url: "users/change-pin",
          method: "POST",
          body,
        }
      },
    }),
    changePassword: builder.mutation({
      query: (body) => {
        return {
          url: "auth/change-password",
          method: "POST",
          body,
        }
      },
    }),
    upOne: builder.mutation({
      query: (body) => {
        return {
          url: "kyc/tier-one",
          method: "POST",
          body,
        }
      },
    }),
    liveness: builder.mutation({
      query: (body) => {
        return {
          url: "users/liveness-check",
          method: "POST",
          body,
        }
      },
    }),
    collectHabit: builder.mutation({
      query: (body) => {
        return {
          url: "users/financial-habit",
          method: "POST",
          body,
        }
      },
    }),
    getBillersByCat: builder.mutation({
      query: (body) => {
        return {
          url: "billings/category",
          method: "POST",
          body,
        }
      },
    }),
    buyData: builder.mutation({
      query: (body) => {
        return {
          url: "billings/buy/data",
          method: "POST",
          body,
        }
      },
    }),
    buyAirtime: builder.mutation({
      query: (body) => {
        return {
          url: "billings/buy/airtime",
          method: "POST",
          body,
        }
      },
    }),
    getBundle: builder.mutation({
      query: (body) => {
        return {
          url: "billings/databundle/bundles",
          method: "POST",
          body,
        }
      },
    }),
    verifyId: builder.mutation({
      query: (body) => {
        return {
          url: "kyc/tier-two/id-verification",
          method: "POST",
          body,
        }
      },
    }),
    verifyAddy: builder.mutation({
      query: (body) => {
        return {
          url: "kyc/tier-two/address",
          method: "POST",
          body,
        }
      },
    }),
    resendOtp: builder.mutation({
      query: (id) => {
        return {
          url: "otp/resend",
          method: "POST",
          body: {
            flow_key: id,
          },
        }
      },
    }),
    makeTransfer: builder.mutation({
      query: (body) => {
        return {
          url: "transfer",
          method: "POST",
          body,
        }
      },
    }),
    payBill: builder.mutation({
      query: (body) => {
        return {
          url: "bill-payment",
          method: "POST",
          body,
        }
      },
    }),
    addBeneficiary: builder.mutation({
      query: (body) => {
        return {
          url: "transaction/beneficiary",
          method: "POST",
          body,
        }
      },
    }),
  }),
})

export const {
  useVerifyMFAMutation,
  useAddBeneficiaryMutation,
  usePayBillMutation,
  useMakeTransferMutation,
  useResendOtpMutation,
  useChangePasswordMutation,
  useVerifyIdMutation,
  useGetBundleMutation,
  useBuyDataMutation,
  useBuyAirtimeMutation,
  useGetBillersByCatMutation,
  useUpOneMutation,
  useLivenessMutation,
  useLoginMutation,
  useChangePinMutation,
  useVerifyPhoneMutation,
  useSendPhoneOtpMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useSetPinMutation,
  useCollectHabitMutation,
  useVerifyEmailMutation,
  useVerifyAddyMutation,
  useSignupInitMutation,
  useCheckAliasMutation,
} = mutationApi
