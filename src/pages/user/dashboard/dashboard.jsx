import React from "react"
import AccountSummary from "../../../components/account-summary/accountSummary"
import Beneficiaries from "../../../components/beneficiaries/beneficiaries"
import DashboardAnalytics from "../../../components/dashboard-analytics/dashboard-analytics"
import PowerUp from "../../../components/power-up/powerUp"
import SendMoney from "../../../components/send-money/sendMoney"
import Services from "../../../components/services/services"
import TransactionHistory from "../../../components/transaction-history/transactionHistory"
// import { useGetCurrentUserQuery } from "../../../redux/api/queryApi"
import Contact from "../../../svg-component/contact"
import User from "../../../svg-component/user"
import "./dashboard.css"

const Dashboard = () => {
  const array = []
  // const { data, isLoading, isSuccess, isError, error, refetch } =
  //   useGetCurrentUserQuery() // Use the query hook // Use the query hook
  // useEffect(() => {
  //   refetch()
  // }, [refetch])

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-first">
          <PowerUp />
          <AccountSummary />
          <SendMoney />
          <DashboardAnalytics />
        </div>
        <div className="dashboard-second">
          <Services />
          <Beneficiaries
            title="Recent beneficiaries"
            img={<User />}
            array={array}
          />
          <Beneficiaries
            title="Saved contacts"
            img={<Contact />}
            array={array}
          />
          <TransactionHistory />
        </div>
      </div>
    </>
  )
}

export default Dashboard
