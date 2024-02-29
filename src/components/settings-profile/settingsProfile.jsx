import React, { useState } from "react"
import User from "../../assets/user-img.png"
import Badges from "../../svg-component/badges"
import Right from "../../svg-component/right"
import TierBadge from "../../svg-component/tier"
import Viewbadges from "../view-badges"
import "./settingsProfile.css"

const SettingsProfile = () => {
  const [right8, setRight8] = useState("-700px")
  const [right9, setRight9] = useState("-700px")
  return (
    <div className="settings-profile">
      <div className="settings-user">
        <img src={User} alt="user" />
        <div>
          <h2>Adam adolf</h2>
          <p>@Adolfus</p>
        </div>
      </div>
      <div className="tier-level">
        <TierBadge />
        <h2>You are currently on tier 1</h2>
      </div>
      <div className="view-badges">
        <Badges />
        <h2 onClick={() => setRight8("0px")}>View badges</h2>
        <Right color="white" />
      </div>
      <Viewbadges
        right={right8}
        messageAction={() => {
          setRight9("0px")
        }}
        closeAction={() => {
          setRight8("-700px")
        }}
      />
    </div>
  )
}

export default SettingsProfile
