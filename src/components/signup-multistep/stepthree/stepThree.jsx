import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import { useRegisterNewUserMutation } from "../../../redux/api/mutationApi"
import { setCompProfile } from "../../../redux/slices/compProfileSlice"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./stepThree.css"
const StepThree = ({ back, forward, page }) => {
  const [active, setActive] = useState(false)
  const suggesstions = ["@adolf", "@adam", "@aadolfus"]
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const { profile } = useSelector((store) => store)
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

  const setName = () => {
    const data = {
      first_name: value,
    }
    dispatch(setCompProfile(data))
  }
  return (
    <div className="stepthree-container">
      <ToastContainer />
      <div className="stepthree-wrapper">
        <div className="stepthree-cont">
          <OnboardingHeader
            title="Tell us your name"
            text="Enter your details to create a Bankit account "
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
              <span>First name</span>
            </div>
            <Info />
          </div>
        </div>
      </div>
      <PriButton
        text="Next"
        active={active}
        action={() => {
          forward()
          setName()
        }}
      />
    </div>
  )
}

export default StepThree
