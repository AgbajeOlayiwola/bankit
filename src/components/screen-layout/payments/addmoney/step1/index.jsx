import React from "react"
import addMmoneyImage from "../../../../../assets/addmoney.png"
import "./step1.css"
const AddMoneyStepOne = () => {
  return (
    <div>
      <div>
        <div className="images">
          <img src={addMmoneyImage} width={58} height={58} />
          <h2>Add Money</h2>
          <p>Fund your BankIT account through transfer or card deposit </p>
        </div>
      </div>
    </div>
  )
}

export default AddMoneyStepOne
