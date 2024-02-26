import React from "react"
import CardTwo from "../../../components/card/card-two"
import { VerticalMiniBarChart } from "../../../components/charts/min-chart"
import "./index.css"
const AdminCustomManagement = () => {
  const chartData = [
    {
      companyName: "Sun",
      progressPaymentPrice: 20,
    },
    {
      companyName: "Mon",
      progressPaymentPrice: 100,
    },
    {
      companyName: "Tue",
      progressPaymentPrice: 150,
    },
    {
      companyName: "Wed",
      progressPaymentPrice: 200,
    },
    {
      companyName: "Thu",
      progressPaymentPrice: 250,
    },
    {
      companyName: "Fri",
      progressPaymentPrice: 300,
    },
  ]
  return (
    <div>
      {" "}
      <h1>Customer Management</h1>
      <div className="cardGrid">
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        {/* <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} /> */}
      </div>
    </div>
  )
}

export default AdminCustomManagement
