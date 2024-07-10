import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import ClosedEye from "../../../svg-component/closedEye"
import OpenEye from "../../../svg-component/openEye"
import OnboardingHeader from "../../onboarding-header/onboardingHeader"
import PriButton from "../../primary-button/priButton"
import "./forgotFive.css"

const ForgotFive = ({ forward }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false)
  const [state, setState] = useState(false)
  const action = () => {
    setState(!state)
  }
  return (
    <div className="forgotone-container">
      <div className="forgotone-wrapper">
        <div className="forgotone-cont">
          <OnboardingHeader
            title="Create Password"
            text="Create a new password for your account"
          />
          <div className="step-one-single">
            <div>
              <input
                type={state ? "text" : "password"}
                required
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
        </div>
        <PriButton text="Next" active={active} action={forward} />
      </div>
    </div>
  )
}

export default ForgotFive
