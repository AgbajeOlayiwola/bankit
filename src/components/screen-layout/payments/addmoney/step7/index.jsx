import React from "react"
import accessLogo from "../../../../../assets/access_logo.png"
import PriButton from "../../../../primary-button/priButton"
const AddMoneyStepSeven = () => {
  return (
    <div className="payment_outer">
      <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
        <img src={accessLogo} width={48} height={48} />
        <h2>Adekule ayo</h2>
      </div>
      <br />
      <div className="payment_inner">
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input type="text" placeholder="Amount" required="required" />
            </div>
          </div>
        </div>
        <br />
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input type="text" placeholder="Naration" required="required" />
            </div>
          </div>
        </div>
        <br />
        <div className="buttonStyle">
          <PriButton text="Next" active={true} load={null} />
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepSeven
