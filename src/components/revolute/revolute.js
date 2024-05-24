import React from "react"
import Phone from "../../assets/iPhone.png"
import Layout from "../../utils/layout/layout"
import PriButton from "../primary-button/priButton"
import "./revolute.css"

const Revolute = () => {
  return (
    <Layout>
      <div className="revolute-container" id="earlyAccessForm">
        <div className="revolute-text">
          <div className="revolute-text1">
            <h2>One app for everything finance</h2>
            <p>
              Be among the first people to get Bankit and earn VIP access to win
              up to N100,000
            </p>
          </div>
          <div className="revolute-text-store">
            <input type="text" placeholder="Name" />

            <input type="text" placeholder="Email Address" />
          </div>
          <div className="welcome-actions">
            <div>
              <PriButton text="Get Early Access" active={true} />
            </div>
          </div>
        </div>

        <div className="revolute-img">
          <img src={Phone} alt="phone" />
        </div>
      </div>
    </Layout>
  )
}
export default Revolute
