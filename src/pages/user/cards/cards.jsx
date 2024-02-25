import React, { useState } from "react"
import CardPin from "../../../components/card-pin/cardPin"
import CardsContainer from "../../../components/cards-container/cardsContainer"
import CardsSuccess from "../../../components/cards-success/cardsSuccess"
import RequestCard from "../../../components/request-card/requestCard"
import "./cards.css"

const Cards = () => {
  const [right, setRight] = useState("-700px")
  const [right2, setRight2] = useState("-700px")
  const [right3, setRight3] = useState("-700px")
  return (
    <>
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
    </>
  )
}

export default Cards
