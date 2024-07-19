import React, { useState } from "react"
import SendMoneyStepOne from "./step1"
import SendMoneyStepTwo from "./step2"
import SendMoneyStepThree from "./step3"
import SendMoneyStepFour from "./step4"
import SendMoneyStepFive from "./step5"
import SendMoneyStepSix from "./step6"
import SendMoneyStepSeven from "./step7"
import SendMoneyStepEight from "./step8"
import SendMoneyStepNine from "./step9"

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
        return <SendMoneyStepTwo nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepThree nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepFour nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepFive nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepSix nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepSeven nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepEight nextPage={() => setPage(page + 1)} />
      case 1:
        return <SendMoneyStepNine nextPage={() => setPage(page + 1)} />
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
