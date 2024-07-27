import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import Coins from "../../assets/coins.png"
import ProfilePic from "../../assets/profile-pic.png"
import Bell from "../../svg-component/bell"
import BurgerMenuSvg from "../svgs/burgwerMenuSvg"
import "./navbar.css"

const Navbar = ({ openSide }) => {
  const profile = useSelector((state) => state.profile)
  const [currentDate, setCurrentDate] = useState("")
  const location = useLocation()
  console.log(profile)
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
  useEffect(() => {
    const today = new Date()
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    const formattedDate = today.toLocaleDateString(undefined, options)
    setCurrentDate(formattedDate)
  }, [])
  return (
    <div
      className={
        location.pathname.includes("admin")
          ? "admin-navbar-container"
          : "navbar-container"
      }
    >
      <div className="navbar-text">
        <h2>Hello {profile?.first_name}</h2>
        <p>{currentDate}</p>
      </div>
      {width > 900 ? (
        <div className="navbar-body">
          <div className="navbar-cont">
            {/* <div className="navbar-search">
              <Search />
              <input type="text" placeholder="Search" />
            </div> */}
            {/* {location.pathname.includes("admin") ? null : ( */}
            <div className="navbar-other">
              <div className="navbar-points">
                <h2>200</h2>
                <img src={Coins} alt="coins" />
              </div>
              <div className="navbar-notifications">
                <Bell />
              </div>
            </div>
            {/* )} */}
          </div>
          {/* {location.pathname.includes("admin") ? null : ( */}
          <div className="navbar-profile">
            <img src={ProfilePic} alt="profilepic" />
          </div>
          {/* )} */}
        </div>
      ) : (
        <div onClick={openSide}>
          <BurgerMenuSvg />{" "}
        </div>
      )}
    </div>
  )
}

export default Navbar
