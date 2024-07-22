import React from "react"
import addMmoneyImage from "../../../assets/addmoney.png"
import bannerImage from "../../../assets/banner.png"
import cardImage from "../../../assets/cardImage.png"
import recieptImage from "../../../assets/recieptImage.png"
import sendmomeyImage from "../../../assets/sendmoney.png"
import CardOne from "../../../components/card/card-one"
import CardThree from "../../../components/card/card-three"
import { LineChart } from "../../../components/charts/vertical-bar-chart"
import { dashsidejsonData } from "../../../components/data"
import SideTable from "../../../components/tables/side-table"
import "./styles.css"
const AdminDashboard = () => {
  const cardData = [
    {
      text: "Lifestyle",
      smallSvg: cardImage,
      price: "N0.00",
    },
    {
      text: "Kiddies",
      smallSvg: cardImage,
      price: "N0.00",
    },
    {
      text: "Business",
      smallSvg: cardImage,
      price: "N0.00",
    },
  ]
  const serviceData = [
    {
      title: "Add Money",
      image: addMmoneyImage,
      about: "Fund your BankIT account through transfer or card deposit ",
    },
    {
      title: "Send Money",
      image: sendmomeyImage,
      about: "Transfer funs to any account through your BankIT account ",
    },
    {
      title: "Pay Bills",
      image: recieptImage,
      about:
        "Make payment for your airtime, data, electricity, cable TV and more",
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
      blueLineData: 3000,
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
          {serviceData.map((item, index) => {
            return (
              <CardThree
                title={item?.title}
                about={item?.about}
                image={item?.image}
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
                <LineChart ChartData={chartData} />
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
