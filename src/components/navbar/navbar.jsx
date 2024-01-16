import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Coins from "../../assets/coins.png"
import ProfilePic from "../../assets/profile-pic.png"
import Bell from "../../svg-component/bell"
import Search from "../../svg-component/search"
import BurgerMenuSvg from "../svgs/burgwerMenuSvg"
import "./navbar.css"

const Navbar = ({ openSide }) => {
  const profile = useSelector((state) => state.profile)

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
    <div className="navbar-container">
      <div className="navbar-text">
        <h2>Hello {profile?.user?.firstName}</h2>
        <p>Wednesday August 23rd, 2023.</p>
      </div>
      {width > 900 ? (
        <div className="navbar-body">
          <div className="navbar-cont">
            <div className="navbar-search">
              <Search />
              <input type="text" placeholder="Search" />
            </div>
            <div className="navbar-other">
              <div className="navbar-points">
                <h2>200</h2>
                <img src={Coins} alt="coins" />
              </div>
              <div className="navbar-notifications">
                <Bell />
              </div>
            </div>
          </div>
          <div className="navbar-profile">
            <img src={ProfilePic} alt="profilepic" />
          </div>
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
