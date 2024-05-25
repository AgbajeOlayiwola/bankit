import React from "react"
import sheild from "../../assets/sheild.png"
import smile from "../../assets/smile.png"
import tv from "../../assets/tv.png"
import Layout from "../../utils/layout/layout"
import DesignSingle from "../design-single/designSingle"
import "./design.css"

const Design = () => {
  return (
    <div className="design-container" data-aos="fade-up">
      <Layout>
        <div className="design-cont">
          <div className="design-header">
            <h2>Why you should choose us</h2>
            <p>This is why you should bank with us</p>
          </div>
          <div className="design-body">
            <div className="design-wrapper">
              <div>
                <DesignSingle
                  color="black"
                  img={smile}
                  bgColor="#9db7fb60"
                  title="Banking Meets Excitement"
                  text="It is your personal finance mentor! Level up your financial literacy with interactive tutorials. Master the art of budgeting, investing, and more while having a blast!"
                />
              </div>
              <div>
                <DesignSingle
                  color="black"
                  img={sheild}
                  bgColor="#9db7fb60"
                  title="Secure and Reliable"
                  text="Bankit is built on the best financial technology making it secure, fast and reliable for use at any time. We ensure to make our users feel safe whenever they use our app"
                />
              </div>
              <div>
                <DesignSingle
                  color="black"
                  img={tv}
                  bgColor="#9db7fb60"
                  title="Multi Platform"
                  text="Bankit is available for both ios and android devices so you can live your best life regardless of the device you have at hand."
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Design
