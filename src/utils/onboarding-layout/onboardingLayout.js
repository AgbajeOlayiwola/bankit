import React from "react"
import One from "../../assets/download_qr.png"
import two from "../../assets/PasswordPng.png"
import "./onboardingLayout.css"

const Onboardinglayout = ({ children, type, page, screen, cureentPage }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3500,
    cssEase: "cubic-bezier(0,0,0.58,1)",
    pauseOnHover: false,
    arrows: false,
    useTransform: true,
  }
  return (
    <div className="onboarding-layout-container-outer">
      <div className="onboarding-layout-container">
        {screen ? null : (
          <div className={"onboarding-layout-image"}>
            <h2>Download the Bankit App</h2>
            <p>Scan the QR code to download the app</p>
            {cureentPage === "loginPage" ? (
              <img src={two} alt="two" width={196} height={217} />
            ) : (
              <img src={One} alt="one" width={196} height={217} />
            )}
          </div>
        )}
        <div className="onboarding-layout-body">
          <div className="onboarding-layout-wrapper">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Onboardinglayout
