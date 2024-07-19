"use client"
import React, { useState } from "react"
import AirtimeStepOne from "./step1"
import AirtimeStepTwo from "./step2"
import AirtimeStepThree from "./step3"
import AirtimeStepFour from "./step4"

const AirtimeSteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <AirtimeStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <AirtimeStepTwo nextPage={() => setPage(page + 1)} />
      case 2:
        return <AirtimeStepThree nextPage={() => setPage(page + 1)} />
      case 3:
        return <AirtimeStepFour nextPage={() => setPage(page + 1)} />
      default:
        return (
          <AirtimeStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default AirtimeSteps
