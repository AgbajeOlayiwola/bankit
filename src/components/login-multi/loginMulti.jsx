import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout"
import StepTwo from "../signup-multistep/steptwo/stepTwo"
import LoginForm from "./login-form/loginForm"
import "./loginMulti.css"
import LoginPassword from "./loginpassword/loginForm"

const LoginMulti = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(0)
  }
  const steps = () => {
    switch (count) {
      case 0:
        return (
          <LoginForm
            forwardToAdmin={() => navigate("/admin/dashboard")}
            forward={() => {
              setCount(1)
            }}
            next={() => setCount(1)}
          />
        )
      case 1:
        return (
          <LoginPassword
            forwardToAdmin={() => navigate("/admin/dashboard")}
            forward={() => {
              navigate("/admin/dashboard")
            }}
            returnBack={() => setCount(0)}
            next={() => setCount(1)}
          />
        )
      case 2:
        return (
          <StepTwo
            back={() => setCount(0)}
            from="login"
            title="Verify your number"
            text="We’ve sent a verification code to your registered number"
            number="+2348******180"
            text2=". Not the right number?"
            text3="Change number"
            forward={() => {
              navigate("/user/dashboard")
            }}
          />
        )
      default:
        return <LoginForm forward={add} />
    }
  }
  return (
    <Onboardinglayout cureentPage={count === 1 ? "loginPage" : null}>
      {steps()}
    </Onboardinglayout>
  )
}

export default LoginMulti
