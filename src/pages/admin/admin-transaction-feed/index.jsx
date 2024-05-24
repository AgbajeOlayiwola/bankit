import React from "react"
import CardOne from "../../../components/card/card-one"
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

  const table_body = [
    {
      User: {
        id: "cb4d01eb-4cb4-4824-9630-798020e2ddb3",
        username: "superAdmin",
        email: "admin@gmail.com",
        firstName: "admin",
        lastName: "admin",
        middleName: null,
        phone: "08121241230",
        bvn: null,
        isBvnVerified: false,
        address: null,
        upgraded: "Tier 0",
        pin: null,
        isPinSet: false,
        isAddressVerifiedStatus: null,
        isAddressVerified: false,
        isIdVerified: false,
        idType: null,
        idVerifiedStatus: null,
        isPhoneVerified: false,
        isEmailVerified: false,
        kycLevel: null,
        refreshToken: null,
        ipAddress: "105.112.123.123",
        currency: null,
        country: null,
        countryCode: null,
        city: null,
        state: null,
        isBiometricEnabled: false,
        role: "super admin",
        status: "active",
        referralCode: null,
        dateOfBirth: null,
        gender: null,
        point: null,
        badges: null,
        userId: "BN001123456",
        lastLoginAt: "2024-03-01T14:04:05.000Z",
        deletedAt: null,

        updatedAt: "2024-03-01T14:04:05.000Z",
      },
      createdAt: "2024-03-01T11:23:59.000Z",
      point: "123456789",
      pointType: "0987654",
      status: "Successful",
    },
  ]
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
