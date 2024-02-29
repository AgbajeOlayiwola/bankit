import React, { useState } from "react"
import Otp from "../otp/otp"
import PriButton from "../primary-button/priButton"
import SidePopup from "../side-popup/sidePopup"
import "./confirmOtp.css"

const ConfirmOtp = ({
  right,
  closeAction,
  title,
  text,
  subText,
  click,
  load,
}) => {
  const [active, setActive] = useState(false)
  const [otpValue, setOtpValue] = useState()
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="confirm-otp">
        <h2>{title}</h2>
        <div className="confirm-otp-body">
          <div className="confirm-otp-header">
            <h2>{text}</h2>
            <p>{subText}</p>
          </div>
          <Otp
            completed={() => {
              setActive(true)
            }}
            otpfields={4}
            otp={(e) => {
              setOtpValue(e)
            }}
          />
          <div className="otp-duration">
            {title === "Reset PIN" ? null : (
              <>
                <p>00:00</p>
                <h3>
                  This code will expire in 3 minutes. Did not receive code?{" "}
                  <br /> <span>Resend code</span>
                </h3>
              </>
            )}
          </div>
          <PriButton
            active={() => {
              active()
            }}
            load={load}
            action={() => click(otpValue)}
            text="Next"
          />
        </div>
      </div>
    </SidePopup>
  )
}

export default ConfirmOtp
