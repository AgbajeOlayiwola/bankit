import React from "react"
import "./styles.css"

const CardOne = ({ text, largesvg, price, smallSvg }) => {
  return (
    <div className="styles-card">
      <div className="card-right">
        <div>
          {smallSvg}

          <h1>{text}</h1>
        </div>
        <h2 className="amount">{price}</h2>
      </div>
      {largesvg}
    </div>
  )
}

export default CardOne
