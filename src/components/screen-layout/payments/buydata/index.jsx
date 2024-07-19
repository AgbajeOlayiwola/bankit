"use client"
import React, { useState } from "react"
import BuyDataStepOne from "./step1"
import BuyDataStepTwo from "./step2"
import BuyDataStepThree from "./step3"
import BuyDataStepFour from "./step4"

const BuyDataSteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <BuyDataStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <BuyDataStepTwo nextPage={() => setPage(page + 1)} />
      case 2:
        return <BuyDataStepThree nextPage={() => setPage(page + 1)} />
      case 3:
        return <BuyDataStepFour nextPage={() => setPage(page + 1)} />
      default:
        return (
          <BuyDataStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default BuyDataSteps
