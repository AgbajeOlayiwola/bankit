import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { setLogin } from "../../../redux/slices/loginSlice"
import Info from "../../../svg-component/info"
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

  const showToastErrorMessage = () => {
    toast.error("Identifier or Password Incorrect", {
      position: "top-right",
    })
  }
  return (
    <div className="loginform-container">
      <ToastContainer />

      <div className="loginform-wrapper">
        <OnboardingHeader
          title="Login"
          text="Enter your details to login to your Bankit account."
          screen="login"
        />
        <form
          onSubmit={handleSubmit((e) => {
            // e.preventDefault()
            const data = {
              phone_number: `${e.phoneNumber.replace(/\s+/g, "")}${
                e.identifier
              }`,
            }
            dispatch(setLogin(data))
            forward()
          })}
        >
          <div className="loginform-content">
            <div className="loginform-cont">
              <div
                className="loginform-group"
                style={{ display: "flex", gap: "12px", flexDirection: "row" }}
              >
                <div className="step-one-single" style={{ width: "15%" }}>
                  <div>
                    <input
                      type="text"
                      placeholder="+234"
                      required="required"
                      {...register(
                        "phoneNumber",
                        {
                          required: "Phone Number is required",
                        },
                        {
                          maxLength: 11,
                        }
                      )}
                      onChange={(e) => {
                        if (e.target.value.length > 0) {
                          setActive(true)
                        } else {
                          setActive(false)
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="step-one-groups" style={{ width: "100%" }}>
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
                      <span>Phone Number</span>
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
            <PriButton text="Next" active={active} load={null} />
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
