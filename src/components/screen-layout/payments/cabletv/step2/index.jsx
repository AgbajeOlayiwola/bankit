import React from "react"
import airtimeLogo from "../../../../../assets/mtn_nigeria_icon.png"
import PriButton from "../../../../primary-button/priButton"
import "./step2.css"
const CableTvStepTwo = ({ nextPage }) => {
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
          <h5 style={{ color: "#666", fontWeight: "700" }}>DSTV Compact</h5>
          <div className="airtime_icon">
            <div className="airtimeOuter">
              <img src={airtimeLogo} width={32} height={32} />
            </div>
          </div>
        </div>
        <br />
        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>Package </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>DSTV Compact</h6>
        </div>
        <br />
        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>
            Smart Card Number{" "}
          </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>080123456789</h6>
        </div>
        <br />
        <div className="payment_bene_viewAll">
          <h5 style={{ color: "#666", fontWeight: "700" }}>Transaction Fee </h5>
          <h6 style={{ color: "#000", fontWeight: "700" }}>N10.00</h6>
        </div>
        <br />
        <br />
        <div className="buttonStyle">
          <PriButton
            text="Proceed"
            active={true}
            load={null}
            action={nextPage}
          />
        </div>
      </div>
    </div>
  )
}

export default CableTvStepTwo
