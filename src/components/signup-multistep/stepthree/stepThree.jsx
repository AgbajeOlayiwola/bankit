import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRegisterNewUserMutation } from "../../../redux/api/mutationApi"
import { setToken } from "../../../redux/slices/tokenSlice"
import ArrowLeft from "../../../svg-component/arrowLeft"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./stepThree.css"
const StepThree = ({ back, forward }) => {
  const [active, setActive] = useState(false)
  const suggesstions = ["@adolf", "@adam", "@aadolfus"]
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const { profile } = useSelector((store) => store)
  const [
    registerNewUser,
    {
      data: registerUser,
      isLoading: newUserLoad,
      isSuccess: newUserSuccess,
      isError: newUserFalse,
      error: newUserErr,
    },
  ] = useRegisterNewUserMutation()

  useEffect(() => {
    if (newUserSuccess) {
      console.log(registerUser)
      dispatch(setToken(registerUser?.accessToken))
      forward()
    } else if (newUserFalse) {
      if (newUserErr) {
        showToastErrorMessage()
      }
    }
  }, [newUserErr, newUserSuccess, newUserFalse])

  const showToastErrorMessage = () => {
    toast.error("Account creation failed", {
      position: "top-right",
    })
  }
  return (
    <div className="stepthree-container">
      <ToastContainer />
      <div className="stepthree-wrapper">
        <div className="back-button">
          <ArrowLeft action={back} />
        </div>
        <div className="stepthree-cont">
          <OnboardingHeader
            title="Just One More Thing..."
            text="Create your Bankit User name"
          />
          <div className="step-one-single">
            <div>
              <input
                type="text"
                required
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  setActive(true)
                  // setSuggestions((arr) => [...arr, e.target.value]);
                }}
              />
              <span>Create a username</span>
            </div>
            <Info />
          </div>
        </div>
        <div className="stepthree-suggestions">
          {suggesstions?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setValue(item)
                  setActive(true)
                }}
              >
                {item}
              </p>
            )
          })}
        </div>
      </div>
      <PriButton
        text="Next"
        active={active}
        action={() => {
          const data = {
            password: profile?.password,
            phone: profile?.phoneNumber,
            firstName: profile?.firstName,
            lastName: profile?.lastName,
            username: value.replace("@", ""),
          }
          registerNewUser(data)
        }}
        load={newUserLoad}
      />
    </div>
  )
}

export default StepThree
