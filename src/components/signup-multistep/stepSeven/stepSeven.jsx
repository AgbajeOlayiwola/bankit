import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { useRegisterNewUserMutation } from "../../../redux/api/mutationApi"
import { useSignUpMutation } from "../../../redux/api/mutationApi"
import { setCompProfile } from "../../../redux/slices/compProfileSlice"
import { setToken } from "../../../redux/slices/tokenSlice"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./stepSeven.css"
const StepSevem = ({ back, forward, page }) => {
  const [active, setActive] = useState(false)
  const suggesstions = ["@adolf", "@adam", "@aadolfus"]
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const { profile } = useSelector((store) => store)
  const [
    signUp,
    {
      data: signUpData,
      isLoading: signUpLoad,
      isSuccess: signUpSuccess,
      isError: signUpFalse,
      error: signUpErr,
    },
  ] = useSignUpMutation()

  const showToastErrorMessage = () => {
    toast.error("Account creation failed", {
      position: "top-right",
    })
  }
  const { compProfile } = useSelector((store) => store)
  const setName = () => {
    const updatedData = {
      ...compProfile,
      username: value,
    }

    dispatch(setCompProfile(updatedData))
    signUp(updatedData)
  }
  useEffect(() => {
    if (signUpSuccess) {
      dispatch(setToken(signUpData?.accessToken))
      forward()
    } else if (signUpErr) {
      showToastErrorMessage()
    }
  }, [signUpSuccess, signUpErr])
  return (
    <div className="stepthree-container">
      <ToastContainer />
      <div className="stepthree-wrapper">
        <div className="stepthree-cont">
          <OnboardingHeader
            title="One more step"
            text="Create a unique username"
            currentStep={page + 1}
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
              <span>Username</span>
            </div>
            <Info />
          </div>
        </div>
      </div>
      <PriButton
        text="Next"
        active={active}
        action={() => {
          setName()
          // registerNewUser(data)
        }}
        load={signUpLoad}
      />
    </div>
  )
}

export default StepSevem
