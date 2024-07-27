import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLoginMutation } from "../../../redux/api/mutationApi"
import { useGetProfileQuery } from "../../../redux/api/queryApi"
import { setProfile } from "../../../redux/slices/profileSlice"
import { setToken } from "../../../redux/slices/tokenSlice"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./loginForm.css"
const LoginPassword = ({ forward, forwardToAdmin, next, returnBack }) => {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [active, setActive] = useState(false)
  const { login } = useSelector((state) => state)

  const action = () => {
    setState(!state)
  }
  const {
    data: getProfileData,
    isLoading: getProfileLoad,
    isSuccess: getProfileSuccess,
    isError: getProfileFalse,
    error: getProfileErr,
    refetch: getProfileReset,
  } = useGetProfileQuery(null)

  const [
    loginCall,
    {
      data: loginUser,
      isLoading: loginUserLoad,
      isSuccess: loginUserSuccess,
      isError: loginUserFalse,
      error: loginUserErr,
    },
  ] = useLoginMutation()
  // useEffect(() => {
  //   if (loginUserSuccess) {
  //     if (loginUser) {
  //       if (
  //         loginUser?.message ==
  //         "First time using this device to login.. Please verify your acount with the otp sent to you"
  //       ) {
  //         next()
  //       } else if (loginUser?.user?.role == "super admin") {
  //         dispatch(setProfile(loginUser))
  //         dispatch(setToken(loginUser?.accessToken))
  //         // forwardToAdmin()
  //       } else if (loginUser?.user?.role !== "super admin") {
  //         dispatch(setProfile(loginUser))
  //         dispatch(setToken(loginUser?.accessToken))
  //         // forward()
  //       }
  //     }
  //   }
  // }, [loginUser, loginUserSuccess, forward, dispatch])
  const showToastErrorMessage = () => {
    toast.error("Identifier or Password Incorrect", {
      position: "top-right",
    })
  }

  useEffect(() => {
    if (loginUserSuccess) {
      getProfileReset()
      dispatch(setToken(loginUser?.data?.auth_token))
    } else if (loginUserErr) {
      showToastErrorMessage()
      returnBack()
    }
  }, [loginUserSuccess, loginUserErr])
  useEffect(() => {
    if (getProfileSuccess) {
      dispatch(setProfile(getProfileData?.data))
      forward()
    }
  }, [getProfileSuccess])
  return (
    <div className="loginform-container">
      <ToastContainer />

      <div className="loginform-wrapper">
        <OnboardingHeader
          title="Enter your password"
          text="Enter your details to create a Bankit account "
          screen="login"
        />
        <form
          onSubmit={handleSubmit((e) => {
            // e.preventDefault()
            const data = {
              ...login,
              passcode: e.password,
            }

            loginCall(data)
          })}
        >
          <div className="loginform-content">
            <div className="loginform-cont">
              <div
                className="loginform-group"
                style={{ display: "flex", gap: "12px", flexDirection: "row" }}
              >
                <div className="step-one-groups" style={{ width: "100%" }}>
                  <div className="step-one-single">
                    <div>
                      <input
                        type="text"
                        name="identifier"
                        placeholder=" "
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                      <span>Password</span>
                    </div>
                    <Info />
                  </div>
                  {errors.identifier ? (
                    <p>{errors?.identifier?.message}</p>
                  ) : null}
                </div>
              </div>
              <div className="loginform-forgot">
                <h2
                  onClick={() => {
                    navigate("/auth/forgot-password")
                  }}
                >
                  Forgot password?
                </h2>
              </div>
            </div>
            <PriButton
              text="Next"
              active={true}
              load={loginUserLoad}
              action={null}
            />
          </div>
        </form>
      </div>
      <p>
        Don’t have an account?
        <span
          onClick={() => {
            navigate("/auth/signup")
          }}
        >
          Get Started
        </span>
      </p>
    </div>
  )
}

export default LoginPassword
