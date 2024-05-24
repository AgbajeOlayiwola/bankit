import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAirtime } from "../../redux/slices/airtimeSlice"
import SupportStyled from "../../styles/support-style/supportStyle"
import Close from "../../svg-component/close"
import OnboardingHeader from "../onboarding-header/onboardingHeader"
import Otp from "../otp/otp"
import PriButton from "../primary-button/priButton"
import "./transactionPin.css"

const TransactionPin = ({ right, closeAction, action, load }) => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const { airtime } = useSelector((store) => store)
  const [val, setVal] = useState()
  const [data, setData] = useState(airtime)

  const click = () => {
    setData((prevData) => ({
      ...prevData,
      pin: val,
    }))
    // dispatch(setAirtime(data))
    action(data)
  }

  return (
    <SupportStyled right={right}>
      <div className="transactionpin-container">
        <div className="close-icon">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="transactionpin-wrapper">
          <OnboardingHeader
            title="Enter PIN"
            text="Enter your pin to authorise transaction"
          />
          <Otp
            otpfields={4}
            completed={() => {
              setActive(true)
            }}
            otp={(e) => {
              console.log(e)
              setVal(e)
            }}
          />
          <PriButton
            text="Proceed"
            load={load}
            active={active}
            action={click}
          />
        </div>
      </div>
    </SupportStyled>
  )
}

export default TransactionPin
