import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ArrowLeft from "../../../svg-component/arrowLeft"
import Info from "../../../svg-component/info"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./forgotOne.css"

const ForgotOne = ({ forward, action }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  return (
    <div className="forgotone-container">
      <div className="back-arrow">
        <ArrowLeft
          action={() => {
            navigate("/auth/login")
          }}
        />
      </div>
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
      <p>
        Still having trouble logging in?{" "}
        <span onClick={action}>contact support</span>
      </p>
    </div>
  )
}

export default ForgotOne
