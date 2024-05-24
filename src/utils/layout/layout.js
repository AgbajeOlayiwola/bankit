import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="cover_outer">
      <div className="cover_inner">{children}</div>
    </div>
  )
}

export default Layout
