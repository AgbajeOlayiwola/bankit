import React from "react"
import "./styles.css"

const CardThree = ({ title, about, image }) => {
  return (
    <div className="styles-card">
      <div className="card-right">
        <div className="imagesCard">
          <img src={image} width={58} height={58} alt="buy" />
          <h2>{title}</h2>
          <p>{about}</p>
        </div>
      </div>
      {/* {largesvg} */}
    </div>
  )
}

export default CardThree
