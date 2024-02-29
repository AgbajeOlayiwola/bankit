import React from "react"
import CardOne from "../../../components/card/card-one"
import MiniProfile from "../../../components/min-profile"
import TableOne from "../../../components/tables/table-one"
import TransactlargeSvg from "../../../svg-component/transact_largeSvg"
import Transactsmall from "../../../svg-component/transact_small"
import "./styles.css"

const AdminTransactionFeed = () => {
  const cardData = [
    {
      text: "Total Transaction",
      svg: <TransactlargeSvg color="#e4e4e4" />,
      smallSvg: <Transactsmall color={" #474747"} />,
      price: "N999,187,519",
    },
    {
      text: "Pending Transaction",
      svg: <TransactlargeSvg color="#e4e4e4" />,
      smallSvg: <Transactsmall color={" #474747"} />,
      price: "N999,187,519",
    },
    {
      text: "Failed Transaction",
      svg: <TransactlargeSvg color="#e4e4e4" />,
      smallSvg: <Transactsmall color={" #474747"} />,
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
    titleTwo: (
      <MiniProfile name={"admin"} last={"admin"} email={"admin@gmail.com"} />
    ),
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
