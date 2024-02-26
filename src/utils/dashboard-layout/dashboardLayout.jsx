import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Chat from "../../components/chat/chat"
import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import Support from "../../components/support/support"
import { clearProfile } from "../../redux/slices/profileSlice"
import { clearToken } from "../../redux/slices/tokenSlice"
import "./dashboardLayout.css"

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-800px")
  const [showSide, setShowSide] = useState(false)
  const openSide = () => {
    setShowSide((prev) => !prev)
  }
  const location = useLocation()
  const logout = async () => {
    await dispatch(clearProfile())
    await dispatch(clearToken())
    navigate("/auth/login")
  }
  return (
    <>
      {location?.pathname?.includes("admin") ||
      location?.pathname?.includes("user") ? (
        <div className="dashboardlayout-container">
          <Sidebar
            showSide={showSide}
            action={() => {
              setRight("0px")
            }}
            action2={() => {
              logout()
            }}
          />
          <div className="dashboardlayout-wrapper">
            <Navbar openSide={openSide} />
            <div
              className={
                location?.pathname?.includes("admin")
                  ? "admin-dashboardlayout-body"
                  : "dashboardlayout-body"
              }
            >
              {children}
            </div>
          </div>

          <Support
            right={right}
            messageAction={() => {
              setRight2("0px")
            }}
            closeAction={() => {
              setRight("-700px")
            }}
          />

          <Chat
            right={right2}
            closeAction={() => {
              setRight2("-800px")
            }}
          />
        </div>
      ) : null}
    </>
  )
}

export default DashboardLayout
