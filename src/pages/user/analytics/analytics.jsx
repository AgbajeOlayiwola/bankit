import React from "react"
import DashboardAnalytics from "../../../components/dashboard-analytics/dashboard-analytics"
import Inflow from "../../../components/inflow/inflow"
import { list } from "../../../utils/data"
import "./analytics.css"

const Analytics = () => {
  return (
    <>
      <div className="analytics-page">
        <h2>Analytics</h2>
        <DashboardAnalytics page={true} />
        <div className="inflow-outlfow">
          <Inflow type="Inflow" amount={20000000} list={list} />
          <Inflow type="Outflow" amount={250000} list={list} />
        </div>
      </div>
    </>
  )
}

export default Analytics
