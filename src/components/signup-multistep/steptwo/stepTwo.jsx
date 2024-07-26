import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// import {
//   useSendOtpMutation,
//   useVerifyOtpMutation,
// } from "../../../redux/api/mutationApi"
import { useVerifyPhoneMutation } from "../../../redux/api/mutationApi"
import Otp from "../../otp/otp"
import PriButton from "../../primary-button/priButton"
import "./stepTwo.css"
const StepTwo = ({
  back,
  forward,
  text,
  title,
  number,
  text2,
  text3,
  from,
}) => {
  const [active, setActive] = useState(false)
  const [convertNumber, setConverNumber] = useState()
  const [otp, setOtp] = useState("")
  const { profile } = useSelector((store) => store)
  console.log(profile)
  // const [
  //   verifyOtp,
  //   {
  //     data: otpSend,
  //     isLoading: newOtpLoad,
  //     isSuccess: newOtpSuccess,
  //     isError: newOtpFalse,
  //     error: newOtpErr,
  //   },
  // ] = useVerifyOtpMutation()
  const [
    verifyPhone,
    {
      data: verifyPhoneData,
      isLoading: verifyPhoneLoad,
      isSuccess: verifyPhoneSuccess,
      isError: verifyPhoneFalse,
      error: verifyPhoneErr,
    },
  ] = useVerifyPhoneMutation()
  // useEffect(() => {
  //   if (sendOtpSuccess) {
  //     showToastOtpSuccessMessage()
  //   }
  // }, [sendOtpData, sendOtpSuccess])
  // useEffect(() => {
  //   if (sendOtpErr) {
  //     showToastOtpErrorMessage()
  //   }
  // }, [sendOtpErr])
  const showToastOtpSuccessMessage = () => {
    toast.success("Otp sent successfully.", {
      position: "top-right",
    })
  }
  const showToastOtpErrorMessage = () => {
    toast.error("Otp failed to send.", {
      position: "top-right",
    })
  }
  // useEffect(() => {
  //   if (newOtpSuccess) {
  //     if (otpSend) {
  //       console.log(otpSend)
  //       if (from == "login") {
  //         forward()
  //       } else {
  //         forward()
  //       }
  //       //  }
  //     }
  //   }
  // }, [otpSend, newOtpSuccess, forward])
  // useEffect(() => {
  //   if (newOtpFalse) {
  //     if (newOtpErr) {
  //       showToastErrorMessage()
  //     }
  //   }
  // }, [newOtpErr, newOtpFalse])
  // useEffect(() => {
  //   if (from === "login") {
  //     return null
  //   } else {
  //     setConverNumber(
  //       `+234${profile?.phoneNumber.slice(
  //         1,
  //         4
  //       )}********${profile?.phoneNumber.slice(9)}`
  //     )
  //   }
  // }, [])
  useEffect(() => {
    if (verifyPhoneSuccess) {
      forward()
    } else if (verifyPhoneErr) {
      showToastErrorMessage()
    }
  }, [verifyPhoneErr, verifyPhoneSuccess])
  const showToastErrorMessage = () => {
    toast.error("Invalid Otp", {
      position: "top-right",
    })
  }
  const resentOtp = () => {
    const data = {
      phoneNumber: profile?.phoneNumber,
    }
  }
  const verifyOtp = () => {
    const data = {
      otp: otp,
    }
    verifyPhone(data)
  }
  return (
    <div className="steptwo-container">
      <ToastContainer />

      <div className="steptwo-cont">
        <div className="header_and_number">
          <div className="steptwo-header">
            <h2>{title}</h2>
            <p>
              {text} <span>{convertNumber}</span> {text2}
            </p>
            {/* {title === "Enter OTP" ? null : <h3>{text3}</h3>} */}
          </div>
          <p className="header_steps">Step 2 of 7</p>
        </div>
        <div className="steptwo-otp">
          <Otp
            completed={() => setActive(true)}
            otp={(e) => {
              setOtp(e)
            }}
            otpfields={6}
          />
          <div className="otp-duration">
            {/* <p>00:00</p> */}
            <h3>
              Didn’t receive the code?
              <span onClick={() => resentOtp()}>
                {/* {sendOtpLoad ? <Loader /> : "Resend"} */}
              </span>
            </h3>
          </div>
        </div>
        <PriButton
          text="Next"
          active={active}
          action={verifyOtp}
          load={verifyPhoneLoad}
        />
      </div>
    </div>
  )
}

export default StepTwo
