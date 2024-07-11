import React from "react"
import Logo from "../../assets/Logo.png"
import Facebook from "../../svg-component/facebook/facebook"
import Instagram from "../../svg-component/instagram/instagram"
import Linkedin from "../../svg-component/linkedin/linkedin"
import Twitter from "../../svg-component/twitter/twitter"
import Layout from "../../utils/layout/layout"
import "./footer.css"

const Footer = () => {
  const date = new Date()
  return (
    <div className="footer-container" data-aos="fade-up">
      <Layout>
        <div className="footer-cont">
          <div className="footer-header">
            <div className="footer-text">
              <img src={Logo} alt="footer" />
            </div>
            <div className="footer-body">
              <p>© {date.getFullYear()} BankIt Inc</p>
              <div className="footer-socials">
                <Linkedin />
                <Twitter />
                <Facebook />
                <Instagram />
              </div>
            </div>

            {/* <div className="footer-links">
              <div className="footer-quick-links">
                <h2>Quick Links</h2>
                <NavLink>Accounts</NavLink>
                <NavLink>Loans</NavLink>
                <NavLink>Cards</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Company</h2>
                <NavLink>About us</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Privacy & Terms</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Security</h2>
                <NavLink>Fraud Prevention</NavLink>
                <NavLink>Security</NavLink>
              </div>
              <div className="footer-quick-links">
                <h2>Support</h2>
                <NavLink>FAQ’S</NavLink>
                <NavLink>Help</NavLink>
                <NavLink>Contact us</NavLink>
              </div>
            </div> */}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: "12px" }}>
              116 Apapa-Oshodi Express Way, Isolo, Lagos, Nigeria
            </p>
            <br />
            <p
              style={{ fontSize: "12px", fontStyle: "none", cursor: "pointer" }}
            >
              <a
                style={{
                  fontSize: "12px",
                  fontStyle: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000",
                }}
                href="tel:07059864396"
              >
                07059864396
              </a>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default Footer
