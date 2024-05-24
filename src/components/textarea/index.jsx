import React from "react"

const TextArea = ({ placeholder, values, action, col, row }) => {
  return (
    <div className="step-one-single">
      <div>
        <textarea
          placeholder={placeholder}
          value={values}
          onChange={action}
          cols={col}
          rows={row}
        ></textarea>
      </div>
    </div>
  )
}

export default TextArea
