import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { useRegisterNewUserMutation } from "../../../redux/api/mutationApi"
import { setCompProfile } from "../../../redux/slices/compProfileSlice"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./stepFive.css"
const StepFive = ({ back, forward, page }) => {
  const [active, setActive] = useState(false)
  const suggesstions = ["@adolf", "@adam", "@aadolfus"]
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  // const [
  //   registerNewUser,
  //   {
  //     data: registerUser,
  //     isLoading: newUserLoad,
  //     isSuccess: newUserSuccess,
  //     isError: newUserFalse,
  //     error: newUserErr,
  //   },
  // ] = useRegisterNewUserMutation()

  // useEffect(() => {
  //   if (newUserSuccess) {
  //     console.log(registerUser)
  //     dispatch(setToken(registerUser?.accessToken))
  //     forward()
  //   } else if (newUserFalse) {
  //     if (newUserErr) {
  //       showToastErrorMessage()
  //     }
  //   }
  // }, [newUserErr, newUserSuccess, newUserFalse])

  const showToastErrorMessage = () => {
    toast.error("Account creation failed", {
      position: "top-right",
    })
  }
  const { compProfile } = useSelector((store) => store)
  const setName = () => {
    const updatedData = {
      ...compProfile,
      passcode: value,
    }

    dispatch(setCompProfile(updatedData))
    forward()
  }
  return (
    <div className="stepthree-container">
      <ToastContainer />
      <div className="stepthree-wrapper">
        <div className="stepthree-cont">
          <OnboardingHeader
            title="Create a password"
            text="Enter your details to create a Bankit account  "
            currentStep={page + 1}
          />
          <div className="step-one-single">
            <div>
              <input
                type="password"
                required
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  setActive(true)
                  // setSuggestions((arr) => [...arr, e.target.value]);
                }}
              />
              <span>Password</span>
            </div>
            <Info />
          </div>
        </div>
      </div>
      <PriButton text="Next" active={active} action={setName} />
    </div>
  )
}

export default StepFive
