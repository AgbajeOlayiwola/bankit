"use client"
import React, { useState } from "react"
import ElectStepOne from "./step1"
import ElectStepTwo from "./step2"
import ElectStepThree from "./step3"

const ElectricitySteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <ElectStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <ElectStepTwo nextPage={() => setPage(page + 1)} />
      case 2:
        return <ElectStepThree nextPage={() => setPage(page + 1)} />

      default:
        return (
          <ElectStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default ElectricitySteps
