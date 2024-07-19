import React, { useState } from "react"
import tinyLogo from "../../../../../assets/Logocopy.png"
import PriButton from "../../../../primary-button/priButton"
import "./step3.css"
const AddMoneyStepThree = () => {
  const [active, setActive] = useState(false)
  return (
    <div className="payment_outer">
      <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
        <img src={tinyLogo} width={48} height={48} />
        <h2>Adekule ayo</h2>
      </div>
      <br />
      <div className="payment_inner">
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input
                type="text"
                placeholder="Recipient Username"
                required="required"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input
                type="text"
                placeholder="Recipient Username"
                required="required"
              />
            </div>
          </div>
        </div>

        <br />
        <div className="buttonStyle">
          <PriButton text="Next" active={active} load={null} />
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepThree
