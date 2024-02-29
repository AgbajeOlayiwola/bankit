import React from "react"
import { useSelector } from "react-redux"
import Input from "../input/input"
import PriButton from "../primary-button/priButton"
import SidePopup from "../side-popup/sidePopup"
import "./accountInfo.css"

const AccountInfo = ({ right, closeAction }) => {
  const { profile } = useSelector((store) => store)
  console.log(profile)
  return (
    <SidePopup right={right} closeAction={closeAction}>
      <div className="account-info-cont">
        <h2>Account Information</h2>
        <div className="account-info-wrapper">
          <div className="account-info-details">
            <p>Edit Profile Photo</p>
          </div>
          <div className="account-info-form">
            <Input
              type="text"
              placeholder="Username"
              text={false}
              edit={true}
              value={profile?.user?.username}
            />
            <Input
              type="text"
              placeholder="First name"
              text={false}
              edit={true}
              value={profile?.user?.firstName}
            />
            <Input
              type="text"
              placeholder="Last name"
              text={false}
              edit={true}
              value={profile?.user?.lastName}
            />
            <Input
              type="number"
              placeholder="Phone number"
              text={false}
              edit={true}
              value={profile?.user?.phone}
            />
            <Input
              type="text"
              placeholder="Tier Level"
              text={false}
              edit={true}
              value={profile?.user?.upgraded}
            />
          </div>
          <PriButton text="Next" active={false} />
        </div>
      </div>
    </SidePopup>
  )
}

export default AccountInfo
