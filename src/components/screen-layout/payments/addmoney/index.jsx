"use client"
import React, { useState } from "react"
import AddMoneyStepOne from "./step1"
import AddMoneyStepTwo from "./step2"
import AddMoneyStepThree from "./step3"
import AddMoneyStepFour from "./step4"
import AddMoneyStepFive from "./step5"
import AddMoneyStepSix from "./step6"
import AddMoneyStepSeven from "./step7"
import AddMoneyStepEight from "./step8"
import AddMoneyStepNine from "./step9"

const AddmoneySteps = () => {
  const [page, setPage] = useState(1)
  const steps = () => {
    switch (page) {
      case 0:
        return (
          <AddMoneyStepOne
            toUserName={() => setPage(1)}
            toAccount={() => setPage(5)}
          />
        )
      case 1:
        return <AddMoneyStepTwo nextPage={() => setPage(page + 1)} />
      case 2:
        return <AddMoneyStepThree nextPage={() => setPage(page + 1)} />
      case 3:
        return <AddMoneyStepFour nextPage={() => setPage(page + 1)} />
      case 4:
        return <AddMoneyStepFive nextPage={() => setPage(page + 1)} />
      case 5:
        return <AddMoneyStepSix nextPage={() => setPage(page + 1)} />
      case 6:
        return <AddMoneyStepSeven nextPage={() => setPage(page + 1)} />
      case 7:
        return <AddMoneyStepEight nextPage={() => setPage(page + 1)} />
      case 8:
        return <AddMoneyStepNine nextPage={() => setPage(page + 1)} />

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
