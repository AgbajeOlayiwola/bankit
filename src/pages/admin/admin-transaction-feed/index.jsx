import React from "react"
import CardOne from "../../../components/card/card-one"
import MiniProfile from "../../../components/min-profile"
import TableOne from "../../../components/tables/table-one"
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
  const table_header = [
    "S/N",
    "Name",
    "Amount",
    "Transaction ID",
    "Type",
    "Status",
    "Action",
  ]
  const table_body = {
    titleone: "1",
    titleTwo: <MiniProfile />,
    titleThree: "N200,000",
    titleFour: "xyew-jsdfdf-100",
    titleFive: "Bill Paymetn",
    titleSix: "Successful",
    titleSeven: "...",
  }
  return (
    <div className="transactionFeed">
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
      <TableOne head={table_header} body={table_body} />
    </div>
  )
}

export default AdminTransactionFeed
