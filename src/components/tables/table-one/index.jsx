import React from "react"
import "./styles.css"
const TableOne = ({ head, body }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {head.map((item, index) => {
              return <th key={index}>{item}</th>
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{body?.titleone}</td>
            <td>{body?.titleTwo}</td>
            <td>{body?.titleThree}</td>
            <td>{body?.titleFour}</td>
            <td>{body?.titleFive}</td>
            <td>{body?.titleSix}</td>
            <td>{body?.titleSeven}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableOne
