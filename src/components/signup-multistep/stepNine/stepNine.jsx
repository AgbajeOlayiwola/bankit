import React from "react"
import { useNavigate } from "react-router-dom"
import Rocket from "../../../assets/rocket.png"
import PriButton from "../../primary-button/priButton"
import SecButton from "../../sec-button/secButton"
import "./stepNine.css"

const StepNine = () => {
  const navigate = useNavigate()
  return (
    <div className="stepfive-container">
      <div className="stepfive-wrapper">
        <div className="stepfive-item">
          <img src={Rocket} alt="rocket" />
          <h2>Tier Upgrade</h2>
          <p>Continue your tier upgrade on our mobile app</p>
        </div>
        <div className="stepfive-button">
          <SecButton
            text="Proceed to Dashboard"
            action={() => {
              navigate("/user/dashboard")
            }}
          />
          <PriButton text="Open app" active={true} />
        </div>
      </div>
    </div>
  )
}

export default StepNine
