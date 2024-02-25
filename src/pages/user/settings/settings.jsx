import React from "react"
import SettingsProfile from "../../../components/settings-profile/settingsProfile"
import SettingsSide from "../../../components/settings-side/settingsSide"
import "./settings.css"

const Settings = () => {
  return (
    <>
      <div className="settings-container">
        <h2>Settings</h2>
        <div className="settings-wrapper">
          <div className="settings-first">
            <SettingsSide />
          </div>
          <div className="settings-second">
            <SettingsProfile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
