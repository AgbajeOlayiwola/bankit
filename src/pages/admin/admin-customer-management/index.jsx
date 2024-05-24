import React from "react"
import { IoFilterSharp } from "react-icons/io5"
import CardTwo from "../../../components/card/card-two"
import { VerticalMiniBarChart } from "../../../components/charts/min-chart"
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
  const table_body = [
    {
      User: {
        id: "cb4d01eb-4cb4-4824-9630-798020e2ddb3",
        username: "superAdmin",
        email: "admin@gmail.com",
        firstName: "admin",
        lastName: "admin",
        middleName: null,
        phone: "08121241230",
        bvn: null,
        isBvnVerified: false,
        address: null,
        upgraded: "Tier 0",
        pin: null,
        isPinSet: false,
        isAddressVerifiedStatus: null,
        isAddressVerified: false,
        isIdVerified: false,
        idType: null,
        idVerifiedStatus: null,
        isPhoneVerified: false,
        isEmailVerified: false,
        kycLevel: null,
        refreshToken: null,
        ipAddress: "105.112.123.123",
        currency: null,
        country: null,
        countryCode: null,
        city: null,
        state: null,
        isBiometricEnabled: false,
        role: "super admin",
        status: "active",
        referralCode: null,
        dateOfBirth: null,
        gender: null,
        point: null,
        badges: null,
        userId: "BN001123456",
        lastLoginAt: "2024-03-01T14:04:05.000Z",
        deletedAt: null,
        createdAt: "2024-03-01T11:23:59.000Z",
        updatedAt: "2024-03-01T14:04:05.000Z",
      },
      createdAt: "2024-03-01T11:23:59.000Z",
      point: "123456789",
      pointType: "0987654",
      status: "Successful",
    },
  ]
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
