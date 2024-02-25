import React from "react"
import { useNavigate } from "react-router-dom"
import ArrowLeft from "../../../svg-component/arrowLeft"
import PriButton from "../../primary-button/priButton"
import SecButton from "../../sec-button/secButton"
import Success from "../../success/success"
import "./stepFour.css"

const StepFour = ({ back, forward }) => {
  const navigate = useNavigate()
  return (
    <div className="stepfour-container">
      <div className="stepfour-wrapper">
        <div className="back-button">
          <ArrowLeft action={back} />
        </div>
        <Success />
        <div className="stepfour-text">
          <h2>Congratulations, your profile has been setup!</h2>
          <p>
            You have created a profile and can start using Bankit, you can also
            choose to upgrade your Tier level and unlock more features
          </p>
        </div>
      </div>
      <div className="stepfour-buttons">
        <SecButton text="Upgrade your tier" action={forward} />
        <PriButton
          text="Proceed to dashboard"
          active={true}
          action={() => {
            navigate("/user/dashboard")
          }}
        />
      </div>
    </div>
  )
}

export default StepFour
