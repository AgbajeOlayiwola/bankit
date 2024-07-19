import React, { useState } from "react"
import PriButton from "../../../../primary-button/priButton"
import "./step4.css"
const AddMoneyStepFour = () => {
  const [active, setActive] = useState(true)
  return (
    <div className="payment_outer">
      <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
        <h2>Confirm Transaction </h2>
      </div>
      <br />
      <div className="payment_inner">
        <div>
          <h6>Amount </h6>
          <br />
          <h1>N5,000.00</h1>
        </div>
        <br />
        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>From </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>BankIT User</h6>
        </div>

        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>To </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>BankIT User</h6>
        </div>
        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>Transaction Fee </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>N10.00</h6>
        </div>
        <br />
        <br />
        <div className="buttonStyle">
          <PriButton text="Proceed" active={active} load={null} />
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepFour
