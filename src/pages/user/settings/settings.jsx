import React from "react"
import "./settings.css"
import DashboardLayout from "../../../utils/dashboard-layout/dashboardLayout"
import SettingsProfile from "../../../components/settings-profile/settingsProfile"
import SettingsSide from "../../../components/settings-side/settingsSide"

const Settings = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  )
}

export default Settings
