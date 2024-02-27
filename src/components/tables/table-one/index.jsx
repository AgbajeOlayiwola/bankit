import React from "react"
import "./styles.css"
const TableOne = ({ head, body }) => {
  return (
    <div className="table">
      <div className="table_header">
        {head.map((item, index) => {
          return <h1 key={index}>{item}</h1>
        })}
      </div>
      <div className="table_body">
        <div>
          <h1>{body?.titleone}</h1>
        </div>
        <div className="profile">{body?.titleTwo}</div>
        <div>
          <h1>{body?.titleThree}</h1>
        </div>
        <div>
          <h1>{body?.titleFour}</h1>
        </div>
        <div>
          <h1>{body?.titleFive}</h1>
        </div>
        <div>
          <h1>{body?.titleSix}</h1>
        </div>
        <div>
          <h1>{body?.titleSeven}</h1>
        </div>
      </div>
    </div>
  )
}

export default TableOne
