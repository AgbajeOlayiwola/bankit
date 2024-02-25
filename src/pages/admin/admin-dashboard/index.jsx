import React from "react"
import CardOne from "../../../components/card/card-one"
import { VerticalBarChart } from "../../../components/charts/vertical-bar-chart"
import Assetlargesvg from "../../../svg-component/asset-large-svg"
import Assetssvgsmall from "../../../svg-component/assets-svg-small"
import Liabilitieslargesvg from "../../../svg-component/liabilities-large-svg"
import Liabilitiessvg from "../../../svg-component/liabilities-svg"
import Loanmanagmentsvg from "../../../svg-component/loan-managment-svg"
import Netbalancesvg from "../../../svg-component/net-balance-svg"
import Usermanagement from "../../../svg-component/user-management"
import Usermanagementlarge from "../../../svg-component/user-management-large"
import "./styles.css"
const AdminDashboard = () => {
  const cardData = [
    {
      text: "Net Balance",
      svg: <Netbalancesvg color="#e4e4e4" />,
      smallSvg: <Loanmanagmentsvg color={" #474747"} />,
      price: "N999,187,519",
    },
    {
      text: "Total Liabilities",
      svg: <Liabilitieslargesvg color="#e4e4e4" />,
      smallSvg: <Liabilitiessvg color="#474747" />,
      price: "N999,187,519",
    },
    {
      text: "Total Assets",
      svg: <Assetlargesvg color="#e4e4e4" />,
      smallSvg: <Assetssvgsmall color="#474747" />,
      price: "N999,187,519",
    },
    {
      text: "Total Number of Accounts",
      svg: <Usermanagementlarge color="#e4e4e4" />,
      smallSvg: <Usermanagement color="#474747" />,
      price: "870,519",
    },
  ]
  const chartData = [
    {
      companyName: "Sun",
      progressPaymentPrice: 0,
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
      progressPaymentPrice: 150,
    },
    {
      companyName: "Fri",
      progressPaymentPrice: 250,
    },
  ]
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>

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
      <div className="barchart-area">
        <VerticalBarChart ChartData={chartData} />
      </div>
    </div>
  )
}

export default AdminDashboard
