import React from "react"
import DailyNeeds from "../../components/daily-needs/dailyNeeds"
import Design from "../../components/design/design"
import Footer from "../../components/footer/footer"
import Revolute from "../../components/revolute/revolute"
import Welcome from "../../components/welcome/welcome"
import "./landing.css"

const Landing = () => {
  return (
    <>
      <Welcome />
      <Design />
      <DailyNeeds />
      {/* <Tailor /> */}
      {/* <Card /> */}
      {/* <Frequently /> */}
      <Revolute />
      <Footer />
    </>
  )
}

export default Landing
