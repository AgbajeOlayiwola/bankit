import React, { useState } from "react"
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout"
import StepTwo from "../signup-multistep/steptwo/stepTwo"
import ForgotFive from "./forgot-five/forgotFive"
import ForgotFour from "./forgot-four/forgotFour"
import ForgotOne from "./forgot-one/forgotOne"
import ForgotThree from "./forgot-three/forgotThree"
import "./forgot.css"

const Forgot = () => {
  const [count, setCount] = useState(4)
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-800px")
  const add = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  const steps = () => {
    switch (count) {
      case 0:
        return (
          <ForgotOne
            forward={add}
            action={() => {
              setRight("0px")
            }}
          />
        )
      case 1:
        return (
          <StepTwo
            title="6-dgits  code"
            text="A 6 digits code has been sent to 080123456789"
            back={minus}
            forward={add}
          />
        )
      case 2:
        return <ForgotThree forward={add} back={minus} />
      case 3:
        return <ForgotFive />
      case 4:
        return <ForgotFour />

      default:
        return (
          <ForgotOne
            forward={add}
            action={() => {
              setRight("0px")
            }}
          />
        )
    }
  }
  return (
    <Onboardinglayout screen={count === 4 ? true : false}>
      {steps()}
    </Onboardinglayout>
  )
}

export default Forgot
