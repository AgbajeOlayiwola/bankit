import React from "react"
import CardOne from "../../../components/card/card-one"
import Assetlargesvg from "../../../svg-component/asset-large-svg"
import Assetssvgsmall from "../../../svg-component/assets-svg-small"
import Liabilitieslargesvg from "../../../svg-component/liabilities-large-svg"
import Liabilitiessvg from "../../../svg-component/liabilities-svg"
import Loanmanagmentsvg from "../../../svg-component/loan-managment-svg"
import Netbalancesvg from "../../../svg-component/net-balance-svg"
import Usermanagement from "../../../svg-component/user-management"
import Usermanagementlarge from "../../../svg-component/user-management-large"
import "./styles.css"
const AdmminReportingAnalytics = () => {
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

  return (
    <div>
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
    </div>
  )
}

export default AdmminReportingAnalytics
