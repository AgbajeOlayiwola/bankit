import React from "react"
import CardOne from "../../../components/card/card-one"
import { VerticalBarChart } from "../../../components/charts/vertical-bar-chart"
import DepositlargeSvg from "../../../svg-component/deposit_largeSvg"
import DepositsmallSvg from "../../../svg-component/deposit_smallSvg"
import Exportsvg from "../../../svg-component/exportsvg"
import Totaltransferssmallsvg from "../../../svg-component/totaltransfers_smallsvg"
import Totaltrasfersvg from "../../../svg-component/totaltrasfersvg"
import TransactlargeSvg from "../../../svg-component/transact_largeSvg"
import Transactsmall from "../../../svg-component/transact_small"
import WithdrawallargeSvg from "../../../svg-component/withdrawal_largeSvg"
import WithdrawalsmallSvg from "../../../svg-component/withdrawal_smallSvg"
import "./styles.css"
const AdmminReportingAnalytics = () => {
  const cardData = [
    {
      text: "Total Transaction",
      svg: <TransactlargeSvg color="#e4e4e4" />,
      smallSvg: <Transactsmall color="#474747" />,
      price: "N999,187,519",
    },
    {
      text: "Total Deposits",
      svg: <DepositlargeSvg color="#474747" />,
      smallSvg: <DepositsmallSvg color="#474747" />,
      price: "N999,187,519",
    },
    {
      text: "Total Withdrawal",
      svg: <WithdrawallargeSvg color="#e4e4e4" />,
      smallSvg: <WithdrawalsmallSvg color="#474747" />,
      price: "N999,187,519",
    },
    {
      text: "Total Transfers",
      svg: <Totaltrasfersvg color="#e4e4e4" />,
      smallSvg: <Totaltransferssmallsvg color="#474747" />,
      price: "870,519",
    },
  ]
  const chartsData = [
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
    <div className="reports">
      <h1>Reporting and Analytics</h1>{" "}
      <div className="cardGrid">
        {cardData.map((item, index) => {
          return (
            <CardOne
              text={item?.text}
              largesvg={item?.svg}
              price={item?.price}
              smallSvg={item?.smallSvg}
            />
          )
        })}
      </div>
      <div className="filters">
        <div className="filter-div">
          <div>
            Export <Exportsvg />
          </div>
        </div>
      </div>
      <div className="barchart-area">
        <div className="chart-top">
          <div className="chart-top-text">
            <h2>Customer Growth</h2>
            <h3>Total no of customers</h3>
          </div>
          <div></div>
        </div>
        <VerticalBarChart ChartData={chartsData} />
      </div>
    </div>
  )
}

export default AdmminReportingAnalytics
