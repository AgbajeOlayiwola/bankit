import React from "react"
import DashboardAnalytics from "../../../components/dashboard-analytics/dashboard-analytics"
import Inflow from "../../../components/inflow/inflow"
import DashboardLayout from "../../../utils/dashboard-layout/dashboardLayout"
import { list } from "../../../utils/data"
import "./analytics.css"

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="analytics-page">
        <h2>Analytics</h2>
        <DashboardAnalytics page={true} />
        <div className="inflow-outlfow">
          <Inflow type="Inflow" amount={20000000} list={list} />
          <Inflow type="Outflow" amount={250000} list={list} />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Analytics
