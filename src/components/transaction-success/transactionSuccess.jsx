import React from "react"
import "./transactionSuccess.css"
import SupportStyled from "../../styles/support-style/supportStyle"
import Close from "../../svg-component/close"
import Success from "../success/success"
import Share from "../../svg-component/share"
import PriButton from "../primary-button/priButton"
import { formatter } from "../../utils/formatter/formatter"
import Right from "../../svg-component/right"

const TransactionSuccess = ({
  right,
  save,
  action,
  closeAction,
  amount,
  first,
  second,
  recipient,
}) => {
  return (
    <SupportStyled right={right}>
      <div className="transaction-success">
        <div className="transaction-close">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="transaction-success-cont">
          <div className="transaction-success-wrapper">
            <Success />
            <div className="transaction-success-text">
              <h2>Transaction Successful</h2>
              <p>
                {first} <span>{formatter.format(amount)} </span> {second}{" "}
                <span>{recipient}</span>
              </p>
            </div>
          </div>
          <div className="save-contact" onClick={save}>
            <h2>Save contact</h2>
            <Right color="#474747" />
          </div>
          <div className="share-container">
            <div>
              <Share />
              <p>Share receipt</p>
            </div>
            <PriButton text="Continue" active={true} action={action} />
          </div>
        </div>
      </div>
    </SupportStyled>
  )
}

export default TransactionSuccess
