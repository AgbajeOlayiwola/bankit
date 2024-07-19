import React from "react"
import { FaChevronRight } from "react-icons/fa6"
import tinyLogo from "../../../../../assets/Logocopy.png"
import { dashsidejsonData } from "../../../../data"
import Sendsvg from "../../../../svgs/send_svg"
import SideTable from "../../../../tables/side-table"
import "./step1.css"
const SendMoneyStepOne = ({ toUserName, toAccount }) => {
  return (
    <div className="payment_outer">
      <div className="payment_inner">
        <div className="payment_bene_viewAll">
          <h5>Beneficiaries </h5>
          <h6>View All</h6>
        </div>
        <div className="images">
          <div className="payment_bene_list">
            <div className="payment_bene_item">
              <div className="payment_bene_init">A</div>
              <h6>Adekule ayo</h6>
            </div>
          </div>
          <br />
          <div className="payment_send_top_outer">
            <div className="payment_send_top" onClick={toUserName}>
              <div className="payment_send_money">
                <img src={tinyLogo} width={24} height={24} />
                <div>
                  <h2>Send to @username</h2>
                  <h3>Send to any Bankit users</h3>
                </div>
              </div>
              <FaChevronRight />
            </div>
            <div className="payment_send_top" onClick={toAccount}>
              <div className="payment_send_money">
                <Sendsvg />
                <div>
                  <h2>Send to Account</h2>
                  <h3>Send to any bank account</h3>
                </div>
              </div>
              <FaChevronRight />
            </div>
          </div>
          <br />
          <div className="payment_table">
            <div className="payment_bene_viewAll">
              <h5>Transactions </h5>
              <h6>View All</h6>
            </div>
            <SideTable jsonData={dashsidejsonData} sign={null} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoneyStepOne
