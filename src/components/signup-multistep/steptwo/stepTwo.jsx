import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useVerifyOtpMutation } from "../../../redux/api/mutationApi"
import ArrowLeft from "../../../svg-component/arrowLeft"
import Otp from "../../otp/otp"
import PriButton from "../../primary-button/priButton"
import "./stepTwo.css"

const StepTwo = ({ back, forward, text, title, number, text2, text3 }) => {
  const [active, setActive] = useState(false)
  const [otp, setOtp] = useState("")
  const profile = useSelector((state) => state.profile)
  console.log(profile)
  const [
    verifyOtp,
    {
      data: otpSend,
      isLoading: newOtpLoad,
      isSuccess: newOtpSuccess,
      isError: newOtpFalse,
      error: newOtpErr,
    },
  ] = useVerifyOtpMutation()
  useEffect(() => {
    if (newOtpSuccess) {
      if (otpSend) {
        console.log(otpSend)

        //  setCookie("accessToken", otpSend?.accessToken);
        //  if (getCookie("accessToken")) {
        forward()
        //  }
      }
    }
  }, [otpSend, newOtpSuccess, forward])
  useEffect(() => {
    if (newOtpFalse) {
      if (newOtpErr) {
        console.log(newOtpErr)
      }
    }
  }, [newOtpErr, newOtpFalse])
  return (
    <div className="steptwo-container">
      <div className="steptwo-back">
        <ArrowLeft action={back} />
      </div>
      <div className="steptwo-cont">
        <div className="steptwo-header">
          <h2>{title}</h2>
          <p>
            {text} <span>{number}</span> {text2}
          </p>
          {title === "Enter OTP" ? null : <h3>{text3}</h3>}
        </div>
        <div className="steptwo-otp">
          <Otp
            completed={() => setActive(true)}
            otp={(e) => {
              setOtp(e)
            }}
          />
          <div className="otp-duration">
            <p>00:00</p>
            <h3>
              This code will expire in 3 minutes. Did not receive code?{" "}
              <span>Resend code</span>
            </h3>
          </div>
        </div>
        <PriButton
          text="Next"
          active={active}
          action={() => {
            // const data = {
            //   phoneNumber: profile.phoneNumber,
            //   otp,
            // };
            // verifyOtp(data);
            forward()
          }}
          load={newOtpLoad}
        />
      </div>
    </div>
  )
}

export default StepTwo
