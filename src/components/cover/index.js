import React from "react"
import "./styles.css"
const Cover = ({ children }) => {
  return (
    <div className="cover_outer">
      <div className="cover_inner">{children}</div>
    </div>
  )
}

export default Cover
