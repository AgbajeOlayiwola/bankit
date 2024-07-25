import React from "react"
import { FaArrowTrendDown } from "react-icons/fa6"
import uptrend from "../../../assets/greenUptrend.png"
import { VerticalBarChart } from "../../../components/charts/bar-chart/indecx"
import { LineChart } from "../../../components/charts/vertical-bar-chart"
import DepositlargeSvg from "../../../svg-component/deposit_largeSvg"
import DepositsmallSvg from "../../../svg-component/deposit_smallSvg"
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
  const chartData = [
    {
      companyName: "Company A",
      blueLineData: 1000,
      redLineData: 800,
    },
    {
      companyName: "Company A",
      blueLineData: 1300,
      redLineData: 800,
    },
    {
      companyName: "Company A",
      blueLineData: 2000,
      redLineData: 800,
    },
    {
      companyName: "Company B",
      blueLineData: 2700,
      redLineData: 1500,
    },
    {
      companyName: "Company B",
      blueLineData: 1800,
      redLineData: 1500,
    },
    {
      companyName: "Company B",
      blueLineData: 1000,
      redLineData: 1500,
    },
    // Add more data as needed
  ]

  return (
    <div className="reports">
      <div className="barchart-area-i">
        <div className="chart-top">
          <div className="chart-top-text">
            <h2>Analytics</h2>
            <div className="chart-labels">
              <div className="creditData">
                <h3>Total Debit</h3>
                <h2>N20,000,000.00</h2>
              </div>
              <div className="credit-data-i">
                <h3>Total Credit</h3>
                <h2>N20,000,000.00</h2>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <LineChart ChartData={chartData} />
      </div>
      <div className="vertical-charts">
        <div className="barchart-areas">
          <div className="chart-top">
            <div className="chart-top-info">
              <div className="chart-top-left">
                <img src={uptrend} width={40} height={40} />
                <h2>Credit</h2>
              </div>
              <div className="chart-top-text">
                <h2>N20,000,000</h2>
                <h3 className="chart-top-up">
                  <FaArrowTrendDown />
                  Total no of customers
                </h3>
              </div>
            </div>
            <div></div>
          </div>
          <VerticalBarChart ChartData={chartData} barColor={"blue"} />
        </div>
        <div className="barchart-areas">
          <div className="chart-top">
            <div className="chart-top-info">
              <div className="chart-top-left">
                <img src={uptrend} width={40} height={40} />
                <h2>Debit</h2>
              </div>
              <div className="chart-top-text">
                <h2>N20,000,000</h2>
                <h3 className="chart-top-down">
                  <FaArrowTrendDown />
                  15% down from last week
                </h3>
              </div>
            </div>
            <div></div>
          </div>
          <VerticalBarChart ChartData={chartData} barColor={"red"} />
        </div>
      </div>
    </div>
  )
}

export default AdmminReportingAnalytics
