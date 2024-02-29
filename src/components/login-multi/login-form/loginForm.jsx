import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLoginMutation } from "../../../redux/api/mutationApi"
import { setProfile } from "../../../redux/slices/profileSlice"
import { setToken } from "../../../redux/slices/tokenSlice"
import ArrowLeft from "../../../svg-component/arrowLeft"
import ClosedEye from "../../../svg-component/closedEye"
import Info from "../../../svg-component/info"
import OpenEye from "../../../svg-component/openEye"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./loginForm.css"
const LoginForm = ({ forward, forwardToAdmin, next }) => {
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
  const action = () => {
    setState(!state)
  }
  const [
    login,
    {
      data: loginUser,
      isLoading: loginUserLoad,
      isSuccess: loginUserSuccess,
      isError: loginUserFalse,
      error: loginUserErr,
    },
  ] = useLoginMutation()
  useEffect(() => {
    if (loginUserSuccess) {
      if (loginUser) {
        if (
          loginUser?.message ==
          "First time using this device to login.. Please verify your acount with the otp sent to you"
        ) {
          next()
        } else if (loginUser?.user?.role == "super admin") {
          dispatch(setProfile(loginUser))
          dispatch(setToken(loginUser?.accessToken))
          forwardToAdmin()
        } else if (loginUser?.user?.role !== "super admin") {
          dispatch(setProfile(loginUser))
          dispatch(setToken(loginUser?.accessToken))
          forward()
        }
      }
    }
  }, [loginUser, loginUserSuccess, forward, dispatch])
  useEffect(() => {
    if (loginUserFalse) {
      if (loginUserErr) {
        console.log(loginUserErr)
        showToastErrorMessage()
      }
    }
  }, [loginUserErr, loginUserFalse])
  const showToastErrorMessage = () => {
    toast.error("Identifier or Password Incorrect", {
      position: "top-right",
    })
  }
  return (
    <div className="loginform-container">
      <ToastContainer />
      <div className="back-button">
        <ArrowLeft
          action={() => {
            navigate("/")
          }}
        />
      </div>
      <div className="loginform-wrapper">
        <OnboardingHeader
          title="Login"
          text="Enter your details to login to your Bankit account."
        />
        <form
          onSubmit={handleSubmit((e) => {
            // forward()
            // e.preventDefault()
            const data = {
              identifier: e.identifier,
              password: e.password,
            }
            dispatch(setProfile({ phoneNumber: e.identifier }))
            login(data)
          })}
        >
          <div className="loginform-content">
            <div className="loginform-cont">
              <div className="loginform-group">
                <div className="step-one-groups">
                  <div className="step-one-single">
                    <div>
                      <input
                        type="text"
                        name="identifier"
                        placeholder=" "
                        {...register("identifier", {
                          required: "Phone or Email is required",
                        })}
                      />
                      <span>Phone or email</span>
                    </div>
                    <Info />
                  </div>
                  {errors.identifier ? (
                    <p>{errors?.identifier?.message}</p>
                  ) : null}
                </div>
                <div className="step-one-groups">
                  <div className="step-one-single">
                    <div>
                      <input
                        type={state ? "text" : "password"}
                        placeholder=" "
                        name="password"
                        {...register("password", {
                          required: "Password is required",
                        })}
                        onInput={(e) => {
                          if (e.target.value.length > 0) {
                            setActive(true)
                          } else {
                            setActive(false)
                          }
                        }}
                      />
                      <span>Password</span>
                    </div>
                    {state ? (
                      <OpenEye action={action} color="#474747" />
                    ) : (
                      <ClosedEye color="#474747" action={action} />
                    )}
                  </div>
                  {errors.password ? <p>{errors?.password?.message}</p> : null}
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
            <PriButton text="Next" active={active} load={loginUserLoad} />
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

export default LoginForm
