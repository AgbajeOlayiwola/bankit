import React, { useState } from "react"
import Otp from "../../../../otp/otp"
import PriButton from "../../../../primary-button/priButton"
import Success from "../../../../success/success"
import "./step4.css"
import { useNavigate } from "react-router-dom"
const BuyDataStepFour = () => {
  const [active, setActive] = useState(true)
  const [otpValue, setOtpValue] = useState()
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()

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
        <h2>Transaction PIN</h2>
        <h6>Kindly input your transaction PIN </h6>
      </div>
      <br />
      <div className="payment_inner">
        <br />
        <Otp
          completed={() => {
            setActive(true)
          }}
          otpfields={4}
          otp={(e) => {
            setOtpValue(e)
          }}
        />
        <br />
        <br />
        <div className="buttonStyle">
          <PriButton
            text="Proceed"
            active={active}
            action={() => setShowModal((prev) => !prev)}
            load={null}
          />
        </div>
      </div>
      {showModal ? (
        <div className="modalOute">
          <div className="modalInner">
            <Success />
            <br />
            <br />
            <div>
              <h2>Transaction PIN</h2>
              <h6>Kindly input your transaction PIN </h6>
            </div>
            <br />
            <div
              style={{ display: "flex", gap: "30px" }}
              className="buttons_flex"
            >
              <PriButton
                text="Cancel"
                active={false}
                action={() => setShowModal((prev) => !prev)}
                load={null}
              />

              <PriButton
                text="Proceed"
                active={true}
                action={() => navigate("/admin/dashboard")}
                load={null}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default BuyDataStepFour
