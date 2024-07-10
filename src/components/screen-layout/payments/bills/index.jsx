"use client"
import React, { useState } from "react"
import BillsStepOne from "./step1"
import BillsStepTwo from "./step2"

const AddbillsSteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <BillsStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <BillsStepTwo nextPage={() => setPage(page + 1)} />

      default:
        return (
          <BillsStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default AddbillsSteps
