import React, { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Layout from "../../utils/layout/layout"
import BurgerMenuSvg from "../svgs/burgwerMenuSvg"
import "./header.css"

const Header = () => {
  const navigate = useNavigate()
  const [showDropDown, setShowDropDown] = useState(false)
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
    <Layout>
      <div className="header-container">
        <div className="header-logo">
          <h2>
            Bank<span>It</span>
          </h2>
        </div>
        {width > 900 ? (
          <>
            <div className="header-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/open">Open an Account</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="header-action">
              <NavLink>Contact Us</NavLink>
              <button
                className="header-login"
                onClick={() => {
                  navigate("/auth/login")
                }}
              >
                Login
              </button>
              <button
                className="header-signup"
                onClick={() => {
                  navigate("/auth/signup")
                }}
              >
                Sign up
              </button>
            </div>
          </>
        ) : (
          <BurgerMenuSvg onClick={() => setShowDropDown((prev) => !prev)} />
        )}
        {showDropDown ? (
          <div className="head">
            <div className="header-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/features">Features</NavLink>
              <NavLink to="/open">Open an Account</NavLink>
              <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="header-action">
              <NavLink>Contact Us</NavLink>
              <button
                className="header-login"
                onClick={() => {
                  navigate("/auth/login")
                }}
              >
                Login
              </button>
              <button
                className="header-signup"
                onClick={() => {
                  navigate("/auth/signup")
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  )
}

export default Header
