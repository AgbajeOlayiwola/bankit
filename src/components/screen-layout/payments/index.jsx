import React, { useState } from "react"
import addMmoneyImage from "../../../assets/addmoney.png"
import airtimeImage from "../../../assets/airtimme.png"
import buydataImage from "../../../assets/buydata.png"
import cabletvImage from "../../../assets/cabletv.png"
import electricityyImage from "../../../assets/electricity.png"
import sendmomeyImage from "../../../assets/sendmoney.png"
import AddmoneySteps from "./addmoney"
import AirtimeSteps from "./airtime"
import BuyDataSteps from "./buydata"
import CableTvSteps from "./cabletv"
import ElectricitySteps from "./electricity"
import SendMoneySteps from "./sendmoney"
import "./styles.css"
const Paymenrs = () => {
  const [onSelectStep, setOnSelectStep] = useState(0)
  const [showPages, setSHowPages] = useState(true)

  const steps = () => {
    switch (onSelectStep) {
      case 0:
        return <AirtimeSteps />
      case 1:
        return <AddmoneySteps />
      case 2:
        return <ElectricitySteps />
      case 3:
        return <SendMoneySteps />
      case 4:
        return <CableTvSteps />
      case 5:
        return <BuyDataSteps />
    }
  }
  return (
    <div>
      {showPages ? (
        <div className="payment-cover">
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(1)
              setSHowPages(false)
            }}
          >
            <img src={addMmoneyImage} width={58} height={58} alt="buy" />
            <h2>Add Money</h2>
            <p>Fund your BankIT account through transfer or card deposit </p>
          </div>
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(3)
              setSHowPages(false)
            }}
          >
            <img src={sendmomeyImage} width={58} height={58} alt="buy" />
            <h2>Send Money</h2>
            <p>Transfer funs to any account through your BankIT account</p>
          </div>
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(0)
              setSHowPages(false)
            }}
          >
            <img src={airtimeImage} width={58} height={58} alt="buy" />
            <h2>Buy Airtime</h2>
            <p>
              Make payment for your airtime, data, electricity, cable TV and
              more{" "}
            </p>
          </div>
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(5)
              setSHowPages(false)
            }}
          >
            <img src={buydataImage} width={58} height={58} alt="buy" />
            <h2>Buy Data</h2>
            <p>
              Make payment for your airtime, data, electricity, cable TV and
              more{" "}
            </p>
          </div>
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(4)
              setSHowPages(false)
            }}
          >
            <img src={cabletvImage} width={58} height={58} alt="buy" />
            <h2>Cable TV</h2>
            <p>
              Make payment for your airtime, data, electricity, cable TV and
              more{" "}
            </p>
          </div>
          <div
            className="images"
            onClick={() => {
              setOnSelectStep(2)
              setSHowPages(false)
            }}
          >
            <img src={electricityyImage} width={58} height={58} alt="buy" />
            <h2>Electricity</h2>
            <p>
              Make payment for your airtime, data, electricity, cable TV and
              more{" "}
            </p>
          </div>
        </div>
      ) : (
        <>{steps()}</>
      )}
    </div>
  )
}

export default Paymenrs
