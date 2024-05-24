import React from "react"

const Selectinput = ({ placeholder, values, action }) => {
  return (
    <div className="step-one-single">
      <div>
        <select required onChange={action} readOnly className="readonly">
          {values.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default Selectinput
