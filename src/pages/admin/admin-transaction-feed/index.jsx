import React from "react"
import CardOne from "../../../components/card/card-one"
import Loanmanagmentsvg from "../../../svg-component/loan-managment-svg"
import Netbalancesvg from "../../../svg-component/net-balance-svg"
import "./styles.css"

const AdminTransactionFeed = () => {
  const cardData = [
    {
      text: "Net Balance",
      svg: <Netbalancesvg color="#e4e4e4" />,
      smallSvg: <Loanmanagmentsvg color={" #474747"} />,
      price: "N999,187,519",
    },
    {
      text: "Total Liabilities",
      svg: <Netbalancesvg color="#e4e4e4" />,
      smallSvg: <Loanmanagmentsvg color={" #474747"} />,
      price: "N999,187,519",
    },
    {
      text: "Total Assets",
      svg: <Netbalancesvg color="#e4e4e4" />,
      smallSvg: <Loanmanagmentsvg color={" #474747"} />,
      price: "N999,187,519",
    },
  ]
  return (
    <div>
      <h1>Transaction Feed</h1>
      <div className="cardflex">
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

export default AdminTransactionFeed
