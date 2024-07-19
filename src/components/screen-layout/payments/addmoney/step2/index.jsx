import React from "react"
import { BiSolidCopy } from "react-icons/bi"
import { FaUser } from "react-icons/fa"
import tinyLogo from "../../../../../assets/Logocopy.png"
import BankSvg from "../../../../svgs/bank_svg"
const AddMoneyStepTwo = () => {
  return (
    <div className="payment_outer">
      <div className="payment_inner">
        <div className="images">
          <br />
          <div className="payment_send_top_outer">
            <div className="payment_send_top" onClick={null}>
              <div className="payment_send_money">
                <BankSvg />
                <div>
                  <h3>Bankit Account Number</h3>
                  <h2>01234567890 </h2>
                </div>
              </div>
              <BiSolidCopy />
            </div>
            <div className="payment_send_top" onClick={null}>
              <div className="payment_send_money">
                <img src={tinyLogo} width={24} height={24} />
                <div>
                  <h3>Bank </h3>
                  <h2>Bankit</h2>
                </div>
              </div>
            </div>
            <div className="payment_send_top" onClick={null}>
              <div className="payment_send_money">
                <FaUser />
                <div>
                  <h3>Account Name</h3>
                  <h2>Abraham Davies</h2>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepTwo
