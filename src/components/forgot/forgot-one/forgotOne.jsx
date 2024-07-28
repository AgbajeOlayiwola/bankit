import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForgotPasswordMutation } from "../../../redux/api/mutationApi"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./forgotOne.css"

const ForgotOne = ({ forward, action }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
  } = useForm()
  const [
    forgotPassword,
    {
      data: forgotPasswordData,
      isLoading: forgotPasswordLoad,
      isSuccess: forgotPasswordSuccess,
      isError: forgotPasswordFalse,
      error: forgotPasswordErr,
    },
  ] = useForgotPasswordMutation()
  useEffect(() => {
    if (forgotPasswordSuccess) {
      forward()
    }
  }, [forgotPasswordSuccess])

  return (
    <div className="forgotone-container">
      {/* <div className="back-arrow">
        <ArrowLeft
          action={() => {
            navigate("/auth/login")
          }}
        />
      </div> */}
      <form
        onSubmit={handleSubmit((e) => {
          // e.preventDefault()
          const data = {
            phone_number: `${e.phoneNumber.replace(/\s+/g, "")}${e.identifier}`,
          }
          forgotPassword(data)
        })}
      >
        <div className="forgotone-wrapper">
          <div className="forgotone-cont">
            <OnboardingHeader
              title="Forgot Password"
              text="Enter the phone number associated to your Bankit account"
            />
            <div className="stp-one-flex">
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
              <div className="step-one-single stp-one-flex">
                <div>
                  <input
                    type="text"
                    required="required"
                    {...register("identifier", {
                      required: "Phone or Email is required",
                    })}
                    onChange={(e) => {
                      if (e.target.value.length > 0) {
                        setActive(true)
                      } else {
                        setActive(false)
                      }
                    }}
                  />
                  <span>Phone or email</span>
                </div>
                <Info />
              </div>
            </div>
          </div>
          <PriButton text="Next" active={active} action={forward} />
        </div>
      </form>
      <p>
        Still having trouble logging in?{" "}
        <span onClick={action}>contact support</span>
      </p>
    </div>
  )
}

export default ForgotOne
