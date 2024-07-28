import AOS from "aos"
import "aos/dist/aos.css"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./App.css" // Your custom styles
import AdminConfiguration from "./pages/admin/admin-configuration"
import AdminCustomManagement from "./pages/admin/admin-customer-management"
import AdminDashboard from "./pages/admin/admin-dashboard"
import AdminFedbackSupport from "./pages/admin/admin-feedback-support"
import AdminLogin from "./pages/admin/admin-login/adminLogin"
import AdmminReportingAnalytics from "./pages/admin/admin-reporting-analytics"
import AdminTransactionFeed from "./pages/admin/admin-transaction-feed"
import AdminUserManagement from "./pages/admin/admin-user-management"
import AdminLoanManagemnt from "./pages/admin/admmin-loan-managemnt"
import ForgotPassword from "./pages/forgot-password/forgotPassword"
import Landing from "./pages/landing/landing"
import Login from "./pages/login/login"
import SignUp from "./pages/signup/signup"
import Analytics from "./pages/user/analytics/analytics"
import Cards from "./pages/user/cards/cards"
import Dashboard from "./pages/user/dashboard/dashboard"
import Settings from "./pages/user/settings/settings"
import Transactions from "./pages/user/transactions/transactions"
import DashboardLayout from "./utils/dashboard-layout/dashboardLayout"

function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once
    })
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={Route}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "linear" }} // Set the transition to linear
          className=""
        >
          <div className="App">
            <ToastContainer />
            <DashboardLayout>
              <Routes>
                <Route path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/analytics" element={<Analytics />} />
                <Route path="/user/transactions" element={<Transactions />} />
                <Route path="/user/cards" element={<Cards />} />
                <Route path="/user/settings" element={<Settings />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route
                  path="/admin/configuration"
                  element={<AdminConfiguration />}
                />
                <Route
                  path="/admin/payment"
                  element={<AdminCustomManagement />}
                />
                <Route
                  path="/admin/transaction-feed"
                  element={<AdminTransactionFeed />}
                />
                <Route
                  path="/admin/feedback-support"
                  element={<AdminFedbackSupport />}
                />
                <Route
                  path="/admin/reporting-analytics"
                  element={<AdmminReportingAnalytics />}
                />
                <Route
                  path="/admin/statement"
                  element={<AdminUserManagement />}
                />
                <Route
                  path="/admin/loan-management"
                  element={<AdminLoanManagemnt />}
                />
              </Routes>
            </DashboardLayout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/login" element={<Login />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPassword />}
              />
            </Routes>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
