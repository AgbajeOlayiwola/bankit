import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import bankitLogo from "../../assets/Logo.png"
import Layout from "../../utils/layout/layout"
import BurgerMenuSvg from "../svgs/burgwerMenuSvg"
import "./header.css"
const Header = () => {
  const navigate = useNavigate()
  const [showDropDown, setShowDropDown] = useState(false)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [chckAuth, setChckAuth] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Extract the query string from the location object
    const queryString = location.search
    // Parse the query string
    const urlParams = new URLSearchParams(queryString)
    // Check if 'auth' parameter exists
    if (urlParams.has("auth")) {
      console.log("Auth parameter is present:", urlParams.get("auth"))
    } else {
      console.log("Auth parameter is not present")
    }
  }, [location])

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
    <div className="bankit_nav">
      <Layout>
        {chckAuth ? (
          <div className="header-container">
            <div className="header-logo">
              <img src={bankitLogo} width={97} height={26} alt="bankit logo" />
            </div>
            {width > 900 ? (
              <>
                {/* <div className="header-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">Features</NavLink>
                <NavLink to="#">Open an Account</NavLink>
                <NavLink to="#">About Us</NavLink>
              </div> */}
                <div className="header-action">
                  {/* <NavLink>Contact Us</NavLink> */}
                  {/* <button
                  className="header-login"
                  onClick={() => {
                    navigate("/auth/login")
                  }}
                >
                  Login
                </button> */}
                  <a href="#earlyAccessForm">
                    <button
                      className="header-signup"
                      // onClick={() => {
                      //   navigate("/auth/signup")
                      // }}
                    >
                      Create an account
                    </button>
                  </a>
                </div>
              </>
            ) : (
              <BurgerMenuSvg onClick={() => setShowDropDown((prev) => !prev)} />
            )}
            {showDropDown ? (
              <div className="head">
                <div className="header-action">
                  <a href="#earlyAccessForm">
                    <button
                      className="header-signup"
                      // onClick={() => {
                      //   navigate("/auth/signup")
                      // }}
                    >
                      Get early access
                    </button>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        ) : location.pathname === "/" ? (
          <div className="header-container">
            <div className="header-logo">
              <img src={bankitLogo} width={97} height={26} alt="bankit logo" />
            </div>
            {width > 900 ? (
              <>
                {/* <div className="header-nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="#">Features</NavLink>
                <NavLink to="#">Open an Account</NavLink>
                <NavLink to="#">About Us</NavLink>
              </div> */}
                <div className="header-action">
                  {/* <NavLink>Contact Us</NavLink> */}
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
                    Get early access
                  </button>
                </div>
              </>
            ) : (
              <BurgerMenuSvg onClick={() => setShowDropDown((prev) => !prev)} />
            )}
            {showDropDown ? (
              <div className="head">
                <div className="header-action">
                  <a href="#earlyAccessForm">
                    <button
                      className="header-signup"
                      // onClick={() => {
                      //   navigate("/auth/signup")
                      // }}
                    >
                      Get early access
                    </button>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="header-container">
            <div className="header-logo">
              <img
                src={bankitLogo}
                width={97}
                height={26}
                alt="bankit logo"
                onClick={() => {
                  navigate("/")
                }}
              />
            </div>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Header
