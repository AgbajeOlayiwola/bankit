import React from "react"
import "./onboardingHeader.css"

const OnboardingHeader = ({ text, title, currentStep }) => {
  return (
    <div className="onboard_head_flex">
      <div className="onboarding-header">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="onboard_head_flex_step">
        <p>Step {currentStep} of 5</p>
      </div>
    </div>
  )
}

export default OnboardingHeader
