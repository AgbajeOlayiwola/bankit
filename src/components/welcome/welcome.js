import React, { useEffect, useState } from "react"
import WelcomeCard from "../../assets/BankitCardBlack.png"
import WelcomeImage from "../../assets/iphonImage.png"
import Cover from "../cover"
import Header from "../header/header"
import PriButton from "../primary-button/priButton"
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
      <Cover>
        <div className="welcome-wrapper">
          <div className="welcome-cont">
            <div className="welcome-hero" data-aos="fade-right">
              <div className="welcome-text">
                <h2>
                  Live your best life with <span>Bankit!</span>
                </h2>
                <p>
                  Say goodbye to boring banking! With Bankit, every deposit, and
                  goal earns you rewards. Watch your savings grow as you conquer
                  financial challenges and unlock new achievements!
                </p>
              </div>
              <div className="welcome-action">
                <div>
                  <a href="#earlyAccessForm">
                    <PriButton text="Get Early Access" active={true} />
                  </a>
                </div>

                {/* <div>
                  <SecButton svg={true} text="Download App" />
                </div> */}
              </div>
            </div>
            {width > 900 ? (
              <div className="welcome-img" data-aos="fade-left">
                <img src={WelcomeCard} className="card" alt="welcome" />
                <img
                  src={WelcomeImage}
                  alt="welcome"
                  className="phone"
                  width={width > 1200 ? 455 : 300}
                  height={width > 1200 ? 766 : 400}
                />
              </div>
            ) : null}
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default Welcome
