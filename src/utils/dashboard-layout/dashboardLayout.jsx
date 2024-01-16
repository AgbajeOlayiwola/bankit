import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Chat from "../../components/chat/chat"
import Navbar from "../../components/navbar/navbar"
import Sidebar from "../../components/sidebar/sidebar"
import Support from "../../components/support/support"
import "./dashboardLayout.css"

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate()
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-800px")
  const [showSide, setShowSide] = useState(false)
  const openSide = () => {
    setShowSide((prev) => !prev)
  }

  return (
    <div className="dashboardlayout-container">
      <Sidebar
        showSide={showSide}
        action={() => {
          setRight("0px")
        }}
        action2={() => {
          navigate("/auth/login")
        }}
      />
      <div className="dashboardlayout-wrapper">
        <Navbar openSide={openSide} />
        <div className="dashboardlayout-body">{children}</div>
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
  )
}

export default DashboardLayout
