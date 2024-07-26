import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import validator from "validator"
// import { useSendOtpMutation } from "../../../redux/api/mutationApi"
import "react-toastify/dist/ReactToastify.css"
import { useSignupInitMutation } from "../../../redux/api/mutationApi"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./stepOne.css"
import { useDispatch } from "react-redux"
import { setSignup } from "../../../redux/slices/signupSlice"
const StepOne = ({ submit, page, forward }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()
  const [
    signupInit,
    {
      data: signupInitData,
      isLoading: signupInitLoad,
      isSuccess: signupInitSuccess,
      isError: signupInitFalse,
      error: signupInitErr,
    },
  ] = useSignupInitMutation()
  // const showToastSuccessMessage = () => {
  //   toast.success("Login successful", {
  //     position: "top-right",
  //   })
  // }
  const showToastErrorMessage = () => {
    toast.error("Unable to initiate signup process ", {
      position: "top-right",
    })
  }

  useEffect(() => {
    if (signupInitSuccess) {
      forward()
    } else if (signupInitErr) {
      showToastErrorMessage()
    }
  }, [signupInitSuccess, signupInitErr])

  const navigate = useNavigate()
  const [state, setState] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [digits, setDigits] = useState(false)
  const [active, setActive] = useState(false)
  const action = () => {
    setState(!state)
  }
  const handlePwd = (e) => {
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
      })
    ) {
      setSymbol(true)
    } else {
      setSymbol(false)
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setUppercase(true)
    } else {
      setUppercase(false)
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setDigits(true)
    } else {
      setDigits(false)
    }
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setNumbers(true)
    } else {
      setNumbers(false)
    }

    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  return (
    <div className="step-one-container">
      <ToastContainer />
      <ToastContainer />

      <div className="step-one-body">
        <OnboardingHeader
          title="Let’s get started"
          text="Enter your phone number and we will send you a confirmation code there"
          currentStep={page + 1}
        />
        <form
          onSubmit={handleSubmit((e) => {
            const data = {
              phone_number: `${e.countryCode}${e.phoneNumber}`,
            }
            dispatch(setSignup(data))
            signupInit(data)
          })}
        >
          <div className="step-one-form">
            <div className="step-one-group">
              <div className="step-one-groups">
                <div className="step-one-single">
                  <div className="input_tel">
                    <input
                      type="tel"
                      className="input_tel_text"
                      placeholder="+234"
                      name="countryCode"
                      {...register(
                        "countryCode",
                        {
                          required: "Phone Number is required",
                        },
                        {
                          maxLength: 11,
                        }
                      )}
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder=" "
                      {...register(
                        "phoneNumber",
                        {
                          required: "Phone Number is required",
                        },
                        {
                          maxLength: 11,
                        }
                      )}
                    />
                    <span>Phone number</span>
                  </div>
                  <Info />
                </div>
                {errors.phoneNumber ? (
                  <p>{errors?.phoneNumber?.message}</p>
                ) : null}
              </div>
            </div>
          </div>
          <PriButton
            text="Next"
            active={true}
            action={null}
            load={signupInitLoad}
            // {newOtpLoad}
          />
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => {
            navigate("/auth/login")
          }}
        >
          Log in
        </span>
      </p>
    </div>
  )
}

export default StepOne
