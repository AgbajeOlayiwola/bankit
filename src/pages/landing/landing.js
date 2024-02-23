import React from "react"
import Card from "../../components/card/card"
import DailyNeeds from "../../components/daily-needs/dailyNeeds"
import Design from "../../components/design/design"
import Footer from "../../components/footer/footer"
import Frequently from "../../components/frequently/frequently"
import Revolute from "../../components/revolute/revolute"
import Tailor from "../../components/tailor/tailor"
import Welcome from "../../components/welcome/welcome"
import "./landing.css"

const Landing = () => {
  return (
    <>
      <Welcome />
      <Design />
      <DailyNeeds />
      <Tailor />
      <Card />
      <Frequently />
      <Revolute />
      <Footer />
    </>
  )
}

export default Landing
