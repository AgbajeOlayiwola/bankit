import React, { useEffect, useState } from "react"
import exportImage from "../../assets/export.png"
import mob_phone_upright from "../../assets/mobileViewMAcBook.png"
import appPhone from "../../assets/phoneLaptopImageI.png"
import totalPoint from "../../assets/totalPoint.png"
import Layout from "../../utils/layout/layout"
import Sheildsvg from "../svgs/sheild-svg"
import "./design.css"
const Design = () => {
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
    <>
      <div className="design-container" data-aos="fade-up">
        <Layout>
          <div
            className="revolute-containers"
            id="earlyAccessForm"
            data-aos="fade-up"
          >
            <div className="design-cont">
              <div className="design-header">
                <h2>
                  Banking Meets <span> Excitement</span>
                </h2>
                <p>
                  It is your personal finance mentor! Level up your financial
                  literacy with interactive tutorials. Master the art of
                  budgeting, investing, and more while having a blast!
                </p>
              </div>
              <div className="design-images">
                <img
                  src={exportImage}
                  className="design-images1"
                  alt="total Point"
                />
                <img
                  src={totalPoint}
                  className="design-images2"
                  alt="total Point"
                />
              </div>
            </div>
          </div>
          <div
            className="revolutes-containers"
            id="earlyAccessForm"
            data-aos="fade-up"
          >
            <div className="design-conts">
              <div className="design-header">
                <h2>Secure and Reliable</h2>
                <p>
                  Bankit is built on the best financial technology making it
                  secure, fast and reliable for use at any time. We ensure to
                  make our users feel safe whenever they use our app
                </p>
              </div>
              <div className="designs-images">
                <Sheildsvg />
              </div>
            </div>
          </div>
          <div
            className="revolutess-containers"
            id="earlyAccessForm"
            style={{ overflow: "hidden" }}
            data-aos="fade-up"
          >
            <div className="designs-conts">
              <div className="design-headers">
                <h2>Multi Platform</h2>
                <p>
                  Bankit is available for both ios and android devices so you
                  can live your best life regardless of the device you have at
                  hand.
                </p>
              </div>
              {width > 900 ? (
                <div className="designs-images">
                  <img
                    src={appPhone}
                    alt="bankitapphone"
                    className="phoneLaptop"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={mob_phone_upright}
                    alt="phone"
                    width={400}
                    height={350}
                  />
                </div>
              )}
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default Design
