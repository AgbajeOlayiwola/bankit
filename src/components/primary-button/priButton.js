import React from "react"
import "./priButton.css"
import Loader from "../loader/loader"

const PriButton = ({ text, action, type, active, load, secondaryButton }) => {
  return active ? (
    load ? (
      <Loader />
    ) : (
      <button
        onClick={action}
        className={secondaryButton ? "sec-button" : "pri-button"}
        type={type}
      >
        {text}
      </button>
    )
  ) : (
    <button disabled className="pri-disabled">
      {text}
    </button>
  )
}

export default PriButton
