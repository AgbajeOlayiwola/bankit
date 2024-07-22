import React from "react"
import "./styles.css"

const CardOne = ({ text, largesvg, price, smallSvg }) => {
  const [integerPart, decimalPart] = price.split(".")
  return (
    <div className="styles-card">
      <div className="card-right">
        <div>
          <img src={smallSvg} width={48} height={48} />

          <h1>{text}</h1>
        </div>
        <h2 className="amount">
          <span className="large-font">{integerPart}</span>
          <span className="small-font">.{decimalPart}</span>
        </h2>
      </div>
      {/* {largesvg} */}
    </div>
  )
}

export default CardOne
