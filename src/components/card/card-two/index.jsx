import React from "react"
import "./styles.css"
import { VerticalMiniBarChart } from "../../charts/min-chart"

const CardTwo = ({ chart }) => {
  return (
    <div className="card-two">
      <div>
        <h3>New Customers</h3>
        <h1>1.25K</h1>
        <div className="percentage">
          <p className="positive">15%</p>
          <p>+20.2k This month</p>
        </div>
      </div>
      <div>{chart}</div>
    </div>
  )
}

export default CardTwo
