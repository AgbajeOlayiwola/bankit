import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify"
import { useForgotPasswordMutation } from "../../../redux/api/mutationApi"
import Otp from "../../otp/otp"
import PriButton from "../../primary-button/priButton"
import "./forgotTwo.css"

const ForgotTwo = ({ back, forward, title, text, text2, text3 }) => {
  const [active, setActive] = useState(false)
  const [convertNumber, setConverNumber] = useState()
  const [otp, setOtp] = useState("")
  const { profile } = useSelector((store) => store)

  const [
    forgotPassword,
    {
      data: forgotPasswordData,
      isLoading: forgotPasswordLoad,
      isSuccess: forgotPasswordSuccess,
      isError: forgotPasswordFalse,
      error: vforgotPasswordrr,
    },
  ] = useForgotPasswordMutation()

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

  useEffect(() => {
    if (forgotPasswordSuccess) {
      forward()
    } else if (vforgotPasswordrr) {
      showToastErrorMessage()
    }
  }, [vforgotPasswordrr, forgotPasswordSuccess])
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
      otp: "123456",
      flow: "login",
    }
    forgotPassword(data)
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
          load={forgotPasswordLoad}
        />
      </div>
    </div>
  )
}

export default ForgotTwo
