import React, { useEffect, useState } from "react"
import WelcomeImage from "../../assets/welcome.png"
import Layout from "../../utils/layout/layout"
import Brands from "../brands/brands"
import Header from "../header/header"
import PriButton from "../primary-button/priButton"
import SecButton from "../sec-button/secButton"
import "./welcome.css"

const Welcome = () => {
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
    <div className="welcome-container">
      <Header />
      <div className="welcome-wrapper">
        <Layout>
          <div className="welcome-cont">
            <div className="welcome-hero">
              <div className="welcome-text">
                <h2>
                  Banking made just for <span>you</span>
                </h2>
                <p>Seamless Banking at your Fingertrips</p>
              </div>
              <div className="welcome-action">
                <div>
                  <PriButton text="Get started" active={true} />
                </div>
                <div>
                  <SecButton text="Download App" />
                </div>
              </div>
            </div>
            {width > 900 ? (
              <div className="welcome-img">
                <img src={WelcomeImage} alt="welcome" />
              </div>
            ) : null}
          </div>
        </Layout>
      </div>
      <Brands />
    </div>
  )
}

export default Welcome
