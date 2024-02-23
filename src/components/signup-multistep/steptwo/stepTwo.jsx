import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useVerifyOtpMutation } from "../../../redux/api/mutationApi"
import ArrowLeft from "../../../svg-component/arrowLeft"
import Otp from "../../otp/otp"
import PriButton from "../../primary-button/priButton"
import "./stepTwo.css"
const StepTwo = ({ back, forward, text, title, number, text2, text3 }) => {
  const [active, setActive] = useState(false)
  const [convertNumber, setConverNumber] = useState()
  const [otp, setOtp] = useState("")
  const { profile } = useSelector((store) => store)
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
        showToastErrorMessage()
      }
    }
  }, [newOtpErr, newOtpFalse])
  useEffect(() => {
    setConverNumber(
      `+234${profile?.phoneNumber.slice(
        1,
        4
      )}********${profile?.phoneNumber.slice(9)}`
    )
  }, [])
  const showToastErrorMessage = () => {
    toast.error("Otp failed.", {
      position: "top-right",
    })
  }

  return (
    <div className="steptwo-container">
      <ToastContainer />
      <div className="steptwo-back">
        <ArrowLeft action={back} />
      </div>
      <div className="steptwo-cont">
        <div className="steptwo-header">
          <h2>{title}</h2>
          <p>
            {text} <span>{convertNumber}</span> {text2}
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
            const data = {
              phoneNumber: profile.phoneNumber,
              otp,
            }
            verifyOtp(data)
            forward()
          }}
          load={newOtpLoad}
        />
      </div>
    </div>
  )
}

export default StepTwo
