import React, { useEffect, useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import addMmoneyImage from "../../../assets/addmoney.png"
import bannerImage from "../../../assets/banner.png"
import cardImage from "../../../assets/cardImage.png"
import recieptImage from "../../../assets/recieptImage.png"
import sendmomeyImage from "../../../assets/sendmoney.png"
import CardOne from "../../../components/card/card-one"
import CardThree from "../../../components/card/card-three"
import { LineChart } from "../../../components/charts/vertical-bar-chart"
import SideTable from "../../../components/tables/side-table"
import {
  useGetAccountQuery,
  useGetBeneficiariesQuery,
  useGetTxHistoryQuery,
} from "../../../redux/api/queryApi"
import { formatBalance } from "../../../utils/formatter/formatBalance"
import "./styles.css"
const AdminDashboard = () => {
  const [hideBalance, setHideBalance] = useState(true)
  const cardData = [
    {
      text: "Lifestyle",
      smallSvg: cardImage,
      price: "0.00",
    },
    {
      text: "Kiddies",
      smallSvg: cardImage,
      price: "0.00",
    },
    {
      text: "Business",
      smallSvg: cardImage,
      price: "0.00",
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

  const {
    data: getAccountData,
    isLoading: getAccountLoad,
    isSuccess: getAccountSuccess,
    isError: getAccountFalse,
    error: getAccountErr,
    refetch: getAccounteset,
  } = useGetAccountQuery(null)
  const {
    data: getBeneficiariesData,
    isLoading: getBeneficiariesLoad,
    isSuccess: getBeneficiariesSuccess,
    isError: getBeneficiariesFalse,
    error: getBeneficiariesErr,
    refetch: getBeneficiariesReset,
  } = useGetBeneficiariesQuery(null)
  const {
    data: getTxHistoryData,
    isLoading: getTxHistoryLoad,
    isSuccess: getTxHistorySuccess,
    isError: getTxHistoryFalse,
    error: getTxHistorysErr,
    refetch: getTxHistoryReset,
  } = useGetTxHistoryQuery(null)

  useEffect(() => {
    getBeneficiariesReset()
    getTxHistoryReset()
  }, [])
  console.log(getTxHistoryData)
  return (
    <div className="dashboard">
      <img src={bannerImage} />
      <div className="cardGridDash1">
        <h2 style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          Your Accounts
          {hideBalance ? (
            <MdVisibility onClick={() => setHideBalance((prev) => !prev)} />
          ) : (
            <MdVisibilityOff onClick={() => setHideBalance((prev) => !prev)} />
          )}
        </h2>
        <div className="dashCardGrid">
          {cardData.map((item, index) => {
            return (
              <CardOne
                text={item?.text}
                price={
                  hideBalance
                    ? "******.**"
                    : formatBalance(getAccountData?.data?.avaliable_balance)
                }
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
              {getBeneficiariesLoad ? (
                <h2>Loading....</h2>
              ) : getBeneficiariesData?.data.length <= 0 ? (
                <h2>No beneficiaries</h2>
              ) : (
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
              )}
            </div>
            <div>
              <div className="barchart-area">
                <div className="chart-top">
                  <div className="chart-top-text">
                    <h2>Analytics</h2>
                    <div className="chart-top-text">
                      <div className="chart-labels">
                        <div className="creditData">
                          <h3>Total Debit</h3>
                          <h2>N20,000</h2>
                        </div>
                        <div className="credit-data-i">
                          <h3>Total Credit</h3>
                          <h2>N20,000</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <LineChart ChartData={chartData} />
              </div>
            </div>
          </div>
          <div className={"right"}>
            {getTxHistoryLoad ? (
              <h2>Loading..</h2>
            ) : (
              <SideTable
                jsonData={getTxHistoryData?.data}
                sign="Transactions"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
