import React from "react"
import { FaChevronRight } from "react-icons/fa6"
import BankSvg from "../../../../svgs/bank_svg"
import Sendsvg from "../../../../svgs/send_svg"
import "./step1.css"
const AddMoneyStepOne = ({ toUserName, toAccount }) => {
  return (
    <div className="payment_outer">
      <div className="payment_inner">
        <div className="images">
          <br />
          <div className="payment_send_top_outer">
            <div className="payment_send_top" onClick={toUserName}>
              <div className="payment_send_money">
                <BankSvg />
                <div>
                  <h2>Bank Transfer</h2>
                  <h3>Add money via bank transfer </h3>
                </div>
              </div>
              <FaChevronRight />
            </div>
            <div className="payment_send_top" onClick={toAccount}>
              <div className="payment_send_money">
                <Sendsvg />
                <div>
                  <h2>Top up via Cards</h2>
                  <h3>Add money directly from your bank card</h3>
                </div>
              </div>
              <FaChevronRight />
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepOne
