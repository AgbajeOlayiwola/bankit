"use client"
import React, { useState } from "react"
import AddMoneyStepOne from "./step1"
import AddMoneyStepTwo from "./step2"

const AddmoneySteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <AddMoneyStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <AddMoneyStepTwo nextPage={() => setPage(page + 1)} />

      default:
        return (
          <AddMoneyStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default AddmoneySteps
