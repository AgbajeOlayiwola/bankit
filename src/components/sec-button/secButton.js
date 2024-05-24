import React from "react"
import Appstore from "../svgs/app_store"
import Applelogo from "../svgs/apple_logo"
import "./secButton.css"

const SecButton = ({ text, action, svg }) => {
  return (
    <button onClick={action} className="sec-button">
      {svg ? (
        <>
          <Appstore />
          <Applelogo />
        </>
      ) : null}
      {text}
    </button>
  )
}

export default SecButton
