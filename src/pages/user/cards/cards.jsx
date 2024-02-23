import React, { useState } from "react"
import "./cards.css"
import DashboardLayout from "../../../utils/dashboard-layout/dashboardLayout"
import CardsContainer from "../../../components/cards-container/cardsContainer"
import RequestCard from "../../../components/request-card/requestCard"
import CardPin from "../../../components/card-pin/cardPin"
import CardsSuccess from "../../../components/cards-success/cardsSuccess"

const Cards = () => {
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  return (
    <DashboardLayout>
      <div className="cards-wrappers">
        <h2>Cards</h2>
        <CardsContainer
          action={() => {
            setRight("0px")
          }}
        />
      </div>
      <RequestCard
        right={right}
        nextAction={() => {
          setRight2("0px")
        }}
      />
      <CardPin
        right={right2}
        btnAction={() => {
          setRight3("0px")
        }}
      />
      <CardsSuccess
        right={right3}
        closeAction={() => {
          setRight("-700px")
          setRight2("-700px")
          setRight3("-700px")
        }}
      />
    </DashboardLayout>
  )
}

export default Cards
