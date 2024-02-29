import React from "react"
import { IoFilterSharp } from "react-icons/io5"
import CardTwo from "../../../components/card/card-two"
import { VerticalMiniBarChart } from "../../../components/charts/min-chart"
import MiniProfile from "../../../components/min-profile"
import TableOne from "../../../components/tables/table-one"
import Exportsvg from "../../../svg-component/exportsvg"
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
  const table_header = [
    "S/N",
    "Name",
    "Account No",
    "Account Bal(N)",
    "Tier Level",
    "Status",
    "Action",
  ]
  const table_body = {
    titleone: "1",
    titleTwo: (
      <MiniProfile name={"admin"} last={"admin"} email={"admin@gmail.com"} />
    ),
    titleThree: "1234567890",
    titleFour: "N100,000",
    titleFive: "tier1",
    titleSix: "Active",
    titleSeven: "...",
  }
  return (
    <div className="admin-alignment">
      {" "}
      <h1>Customer Management</h1>
      <div className="cardGrid">
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} />
        {/* <CardTwo chart={<VerticalMiniBarChart ChartData={chartData} />} /> */}
      </div>
      <div className="filters">
        <div className="filter-div">
          <div>
            All Status <IoFilterSharp />
          </div>
          <div>
            Export <Exportsvg />
          </div>
        </div>
      </div>
      <TableOne head={table_header} body={table_body} />
    </div>
  )
}

export default AdminCustomManagement
