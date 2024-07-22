import React, { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import advert from "../../assets/bankitAd.png"
import sidebarLogo from "../../assets/sidebarLogo.png"
import SideBarData from "../../utils/sidebarData"
import "./sidebar.css"
const Sidebar = ({ action, action2, showSide }) => {
  const location = useLocation()
  const color1 = location.pathname === "/user/dashboard" ? "#062983" : "#5482F7"
  const color2 =
    location.pathname === "/user/transactions" ? "#062983" : "#5482F7"
  const color3 = location.pathname === "/user/analytics" ? "#062983" : "#5482F7"
  const color4 = location.pathname === "/user/cards" ? "#062983" : "#5482F7"
  const color5 = location.pathname === "/user/settings" ? "#062983" : "#5482F7"
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width])
  return (
    <div
      className={
        width < 900
          ? showSide
            ? location.pathname.includes("admin")
              ? "admin-sidebar-container"
              : "sidebar-container"
            : "mobile-sidebar-container"
          : location.pathname.includes("admin")
          ? "admin-sidebar-container"
          : "sidebar-container"
      }
    >
      <div className="sidebar-cont">
        <img src={sidebarLogo} width={97} height={32} alt="bankit logo" />
        <div className="sidebar-links">
          {SideBarData(color1, color2, color3, color4, color5)?.links?.map(
            (item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <div
                    className={
                      item.link === location.pathname
                        ? "sidebar-single active"
                        : "sidebar-single"
                    }
                  >
                    {item.img}
                    <p>{item.text}</p>
                  </div>
                </NavLink>
              )
            }
          )}
        </div>
      </div>
      <img src={advert} width={241} height={221} alt="bankit ad" />
      <div className="sidebar-wrapper">
        {SideBarData()?.subLinks?.map((item, index) => {
          return (
            <div
              className={
                item.text === "Logout"
                  ? "sidebar-single logout"
                  : "sidebar-single"
              }
              key={index}
              onClick={item.text === "Help Center" ? action : action2}
            >
              {item.img}
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
