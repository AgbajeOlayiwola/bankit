import React from "react"
import { useLocation } from "react-router-dom"
import AnalyticsSvg from "../svg-component/analyticsSvg"
import CardsSvg from "../svg-component/cardsSvg"
import DashboardSvg from "../svg-component/dashboardSvg"
import HelpCenter from "../svg-component/helpCenter"
import Logout from "../svg-component/logout"
import SettingsSvg from "../svg-component/settingsSvg"
import TransactionSvg from "../svg-component/transactionSvg"
import Usermanagement from "../svg-component/user-management"

const SideBarData = (color1, color2, color3, color4, color5) => {
  const location = useLocation()
  if (location?.pathname?.includes("admin")) {
    return {
      links: [
        {
          img: <DashboardSvg color={color1} />,
          text: "Dashboard",
          link: "/admin/dashboard",
        },
        {
          img: <Usermanagement color={color2} />,
          text: "Payments",
          link: "/admin/custom-management",
        },
        {
          img: <TransactionSvg color={color2} />,
          text: "Cards",
          link: "/admin/transaction-feed",
        },
        {
          img: <AnalyticsSvg color={color3} />,
          text: "Analytics",
          link: "/admin/reporting-analytics",
        },
        {
          img: <SettingsSvg color={color5} />,
          text: "Transactions",
          link: "/admin/configuration",
        },

        // {
        //   img: <Loanmanagmentsvg color={color5} />,
        //   text: "Loan Management",
        //   link: "/admin/loan-management",
        // },
        {
          img: <Usermanagement color={color5} />,
          text: "Statements",
          link: "/admin/user-management",
        },
        // {
        //   img: <Feedbacksupport color={color5} />,
        //   text: "Feedback & Support",
        //   link: "/admin/feedback-support",
        // },
      ],
      subLinks: [
        {
          img: <HelpCenter />,
          text: "Settings",
        },
        {
          img: <Logout />,
          text: "Logout",
        },
      ],
    }
  } else {
    return {
      links: [
        {
          img: <DashboardSvg color={color1} />,
          text: "Dashboard",
          link: "/user/dashboard",
        },
        {
          img: <TransactionSvg color={color2} />,
          text: "Transaction",
          link: "/user/transactions",
        },
        {
          img: <AnalyticsSvg color={color3} />,
          text: "Analytics",
          link: "/user/analytics",
        },
        {
          img: <CardsSvg color={color4} />,
          text: "Cards",
          link: "/user/cards",
        },
        {
          img: <SettingsSvg color={color5} />,
          text: "Settings",
          link: "/user/settings",
        },
      ],
      subLinks: [
        {
          img: <HelpCenter />,
          text: "Help Center",
        },
        {
          img: <Logout />,
          text: "Logout",
        },
      ],
    }
  }
}

export default SideBarData
