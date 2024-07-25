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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "30px", color: "#062983" }}>₦</span>
          <h2
            className="amount"
            style={{ display: "flex", gap: "3px", alignItems: "baseline" }}
          >
            <span
              className="large-font"
              style={{ display: "flex", gap: "3px" }}
            >
              {" "}
              {integerPart}
            </span>
            <span className="small-font">.{decimalPart}</span>
          </h2>
        </div>
      </div>
      {/* {largesvg} */}
    </div>
  )
}

export default CardOne
