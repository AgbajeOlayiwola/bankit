"use client"
import React, { useState } from "react"
import { default as CableTvStepOne } from "./step1"
import CableTvStepTwo from "./step2"
import CableTvStepThree from "./step3"

const CableTvSteps = () => {
  const [page, setPage] = useState(0)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <CableTvStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
      case 1:
        return <CableTvStepTwo nextPage={() => setPage(page + 1)} />
      case 2:
        return <CableTvStepThree nextPage={() => setPage(page + 1)} />

      default:
        return (
          <CableTvStepOne
            nextPage={() => setPage(page + 1)}
            movetobank={() => setPage(1)}
          />
        )
    }
  }
  return <div>{steps()}</div>
}

export default CableTvSteps
