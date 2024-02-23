import { AnimatePresence, motion } from "framer-motion"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AdminLogin from "./pages/admin/admin-login/adminLogin"
import Landing from "./pages/landing/landing"
import Analytics from "./pages/user/analytics/analytics"
import Cards from "./pages/user/cards/cards"
import Dashboard from "./pages/user/dashboard/dashboard"
import ForgotPassword from "./pages/user/forgot-password/forgotPassword"
import Login from "./pages/user/login/login"
import Settings from "./pages/user/settings/settings"
import SignUp from "./pages/user/signup/signup"
import Transactions from "./pages/user/transactions/transactions"

function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  }
  return (
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
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default App
