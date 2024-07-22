import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setProfile } from "../../redux/slices/profileSlice"
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout"
import StepEight from "./stepEight/stepEight"
import StepFive from "./stepFive/stepFive"
import StepFour from "./stepFour/stepFour"
import StepNine from "./stepNine/stepNine"
import StepSevem from "./stepSeven/stepSeven"
import StepSix from "./stepSix/stepSix"
import StepOne from "./stepone/stepOne"
import StepThree from "./stepthree/stepThree"
import StepTwo from "./steptwo/stepTwo"

const SignupMulti = () => {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)
  const [type, setType] = useState("")
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
          <StepOne
            submit={(e) => {
              dispatch(setProfile(e))
              add()
            }}
            forward={add}
            nextPage={() => count + 1}
            page={count}
          />
        )

      case 1:
        return (
          <StepTwo
            back={minus}
            forward={add}
            title="Verify your number"
            text="We’ve sent a verification code to your registered number"
            number="+2348******180"
            text2=". Not the right number?"
            text3="Change number"
          />
        )

      case 2:
        return <StepThree back={minus} forward={add} page={count} />
      case 3:
        return <StepFour back={minus} forward={add} page={count} />
      case 4:
        return <StepFive back={minus} forward={add} page={count} />
      case 5:
        return <StepSix back={minus} forward={add} page={count} />
      case 6:
        return <StepSevem back={minus} forward={add} page={count} />
      case 7:
        return <StepEight back={minus} forward={add} page={count} />
      case 8:
        return <StepNine />
      default:
        return <StepOne submit={add} />
    }
  }
  useEffect(() => {
    if (count === 4) {
      setType("final")
    } else {
      setType("")
    }
  }, [count])
  return (
    <Onboardinglayout page={count} type={type}>
      {steps()}
    </Onboardinglayout>
  )
}

export default SignupMulti
