import React from "react"
import PriButton from "../../../../primary-button/priButton"
import "./step1.css"
const ElectStepOne = ({ toUserName, toAccount }) => {
  return (
    <div className="payment_outer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "17px",
          flexDirection: "column",
        }}
      >
        <h2>Electricity</h2>
        <h6>Top up your electricity directly with Bankit</h6>
      </div>
      <br />
      <br />
      <div className="payment_inner">
        <div className="step-one-groups" style={{ width: "100%" }}>
          <div className="step-one-single">
            <div>
              <input
                type="text"
                placeholder="Select Network"
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
                placeholder="Phone Number"
                required="required"
              />
            </div>
          </div>
        </div>
        <br />
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
              <input type="text" placeholder="Amount" required="required" />
            </div>
          </div>
        </div>
        <br />
        <PriButton
          text="Proceed"
          action={null}
          type={null}
          active={true}
          load={null}
        />
      </div>
    </div>
  )
}

export default ElectStepOne
