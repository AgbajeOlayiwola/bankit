import React, { useState } from "react"
import Bigsepnder from "../../svg-component/big_sepnder"
import Moneybadgesvg from "../../svg-component/money_badgesvg"
import Platformbadgesvg from "../../svg-component/platform_badgesvg"
import SidePopup from "../side-popup/sidePopup"
import "./styles.css"
const Viewbadges = ({ right, closeAction, messageAction }) => {
  const [active, setActive] = useState(false)
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="badges">
        <h1 className="badgesh1">Badges</h1>
        <div className="badgesName">
          <h2 className="badgesNameh2">Display badges</h2>
          <div className="badgeFlex">
            <div className="badge">
              <Bigsepnder />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Platformbadgesvg />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
          </div>
        </div>
        <div className="badgesName">
          <h2 className="badgesNameh2">Earned badges</h2>
          <div className="badgeFlex">
            <div className="badge">
              <Bigsepnder />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Platformbadgesvg />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Moneybadgesvg />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Bigsepnder />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Moneybadgesvg />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
            <div className="badge">
              <Platformbadgesvg />
              <h2>Big spender</h2>
              <h3>40,000 out of 100,000</h3>
            </div>
          </div>
        </div>
      </div>
    </SidePopup>
  )
}

export default Viewbadges
