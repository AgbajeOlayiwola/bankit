import React, { useState } from "react"
import SidePopup from "../side-popup/sidePopup"
import Managerewards from "./manage-rewards"
import Userdetails from "./user-details"

const Rewards = ({ right, closeAction, messageAction, recall }) => {
  const [page, setPage] = useState(0)
  const conditionalComponent = () => {
    // eslint-disable-next-line default-case
    switch (page) {
      case 0:
        return <Userdetails nextPage={() => setPage(1)} />
      case 1:
        return <Managerewards recall={recall} />
    }
  }
  return (
    <SidePopup right={right} closeAction={closeAction}>
      {conditionalComponent()}
    </SidePopup>
  )
}

export default Rewards
