import React from "react"
import bannerImage from "../../../assets/banner.png"
import cardImage from "../../../assets/cardImage.png"
import CardOne from "../../../components/card/card-one"
import { VerticalBarChart } from "../../../components/charts/vertical-bar-chart"
import { dashsidejsonData } from "../../../components/data"
import SideTable from "../../../components/tables/side-table"
import "./styles.css"
const AdminDashboard = () => {
  const cardData = [
    {
      text: "Lifestyle",
      smallSvg: cardImage,
      price: "N999,187,519",
    },
    {
      text: "Kiddies",
      smallSvg: cardImage,
      price: "N999,187,519",
    },
    {
      text: "Business",
      smallSvg: cardImage,
      price: "N999,187,519",
    },
  ]
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
    <div className="dashboard">
      <img src={bannerImage} />
      <div className="cardGridDash1">
        <h2>Your Accounts</h2>

        <div className="dashCardGrid">
          {cardData.map((item, index) => {
            return (
              <CardOne
                text={item?.text}
                price={item?.price}
                smallSvg={item?.smallSvg}
              />
            )
          })}
        </div>
      </div>
      <div className="cardGridDash1">
        <h2>Services</h2>

        <div className="dashCardGrid">
          {cardData.map((item, index) => {
            return (
              <CardOne
                text={item?.text}
                price={item?.price}
                smallSvg={item?.smallSvg}
              />
            )
          })}
        </div>
      </div>
      <div className="bottomFlexTop">
        <div className="dashBoottomFlex">
          <div className="dashBoottomFlexInn">
            <div className="dashBoottomFlexHist">
              <h3>Recent Beneficiaries</h3>
              <div className="dashBeneficiaryFLex">
                <div className="dashuserlist">
                  <div className="initials">A</div>
                  <h2>Adekunle</h2>
                </div>
                <div className="dashuserlist">
                  <div className="initials">A</div>
                  <h2>Adekunle</h2>
                </div>
                <div className="dashuserlist">
                  <div className="initials">A</div>
                  <h2>Adekunle</h2>
                </div>

                <div className="dashuserlist">
                  <div className="initials">A</div>
                  <h2>Adekunle</h2>
                </div>
                <div className="dashuserlist">
                  <div className="initials">A</div>
                  <h2>Adekunle</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="barchart-area">
                <div className="chart-top">
                  <div className="chart-top-text">
                    <h2>Analytics</h2>
                    <h3>Total no of customers</h3>
                  </div>
                  <div></div>
                </div>
                <VerticalBarChart ChartData={chartData} />
              </div>
            </div>
          </div>
          <div className={"right"}>
            <SideTable jsonData={dashsidejsonData} sign="Transactions" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
