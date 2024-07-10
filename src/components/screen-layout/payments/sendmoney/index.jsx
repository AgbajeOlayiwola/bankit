"use client"
import React, { useState } from "react"
import SendMoneyStepOne from "./step1"
import SendMoneyStwpTwo from "./step2"

const SendMoneySteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <SendMoneyStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <SendMoneyStwpTwo nextPage={() => setPage(page + 1)} />

      default:
        return (
          <SendMoneyStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default SendMoneySteps
