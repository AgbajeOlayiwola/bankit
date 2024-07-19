import React from "react"
import airtimeLogo from "../../../../../assets/mtn_nigeria_icon.png"
import PriButton from "../../../../primary-button/priButton"
import "./step2.css"
const AddMoneyStepTwo = ({ nextPage }) => {
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
        <h2>Airtime</h2>
        <h6>Recharge your phone directly with Bankit</h6>
      </div>
      <br />
      <br />
      <div className="payment_inner">
        <h5 style={{ textAlign: "start" }}>Most Recent</h5>
        <br />
        <div>
          <div className="airtime_icon">
            <div className="airtimeOuter">
              <img src={airtimeLogo} width={32} height={32} />
            </div>
            <p>081234567890</p>
          </div>
        </div>
        <br />
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
        <PriButton
          text="Proceed"
          action={nextPage}
          type={null}
          active={true}
          load={null}
        />
      </div>
    </div>
  )
}

export default AddMoneyStepTwo
