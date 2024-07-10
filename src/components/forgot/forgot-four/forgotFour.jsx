import React from "react"
import { useNavigate } from "react-router-dom"
import PriButton from "../../primary-button/priButton"
import Success from "../../success/success"
import "./forgotFour.css"

const ForgotFour = () => {
  const navigate = useNavigate()
  return (
    <div className="forgotfour-outer">
      <div className="forgotfour-container">
        <div className="forgotfour-wrapper">
          <Success />
          <div>
            <h2>Password changed successfully</h2>
            <p>
              You have changed the password for your account. Please proceed to
              login with your new Password created.
            </p>
          </div>
        </div>
        <PriButton
          text="Login to your account"
          active={true}
          action={() => {
            navigate("/auth/login")
          }}
        />
      </div>
    </div>
  )
}

export default ForgotFour
