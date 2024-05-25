import React from "react"
import phone_upright from "../../assets/phone_image.png"
import Layout from "../../utils/layout/layout"
import Pointssvg from "../svgs/pointssvg"
import "./dailyNeeds.css"
const DailyNeeds = () => {
  return (
    <div className="daily-needs-container" data-aos="fade-up">
      <Layout>
        <div className="daily-needs-wrapper">
          <div className="design-body">
            <div className="design-wrappers">
              <div>
                <div>
                  <img
                    src={phone_upright}
                    alt="phone"
                    width={546}
                    height={764}
                  />
                </div>
              </div>
              <div className="daily_needs_copy">
                <h1>Stay ahead of everything finance with Bankit</h1>
                <p>
                  Navigate the landscape of smart spending with our intuitive
                  app. Discover personalized spending insights, set budgets and
                  earn rewards for making financially savvy choices. It’s like
                  having a cheat code for financial success at your fingertips!
                </p>
                <div className="daily_neads_list">
                  <div className="daily_neads_list_div">
                    <div>
                      <p>
                        <Pointssvg /> Spend and manage money easily
                      </p>
                    </div>
                    <div>
                      <p>
                        <Pointssvg />
                        Make card payments
                      </p>
                    </div>
                    <div>
                      <p>
                        <Pointssvg />
                        Buy now and pay later (BNPL)s
                      </p>
                    </div>
                  </div>
                  <div className="daily_neads_list_div">
                    <div>
                      <p>
                        <Pointssvg />
                        Earn cashback and big rewards
                      </p>
                    </div>
                    <div>
                      <p>
                        <Pointssvg />
                        Make card payments
                      </p>
                    </div>
                    <div>
                      <p>
                        <Pointssvg />
                        Schedule payments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default DailyNeeds
