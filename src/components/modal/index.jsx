import React from "react"
import Close from "../../svg-component/close"
import "./styles.css"

export const Modal = ({ children, closeAction }) => {
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="modal-close">
          {" "}
          <Close action={closeAction} color="#474747" />
        </div>
        {children}
      </div>
    </div>
  )
}
