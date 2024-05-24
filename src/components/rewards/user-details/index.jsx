import React from "react"
import "./styles.css"

import { useSelector } from "react-redux"
import profileImage from "../../../assets/mini_profil_img.png"
import PriButton from "../../primary-button/priButton"
const Userdetails = ({ nextPage }) => {
  const { configdata } = useSelector((store) => store)
  return (
    <div className="allInfo">
      <h1>User Details</h1>
      <div className="AllInfoimgDiv">
        <img width={178} height={178} src={profileImage} />
      </div>
      <div className="info-cover">
        <h1>Basic Information</h1>
        <div className="info-flex">
          <div>
            <h2>First Name</h2>
            <h2>Last Name</h2>
            <h2>Account Number</h2>
            <h2>Date of birth</h2>
            <h2>Gender</h2>
            <h2>Email</h2>
          </div>
          <div>
            <h2>{configdata?.User?.firstName}</h2>
            <h2>{configdata?.User?.lastName}</h2>
            <h2>987623487</h2>
            <h2>{configdata?.createdAt?.split("T")[0]}</h2>
            <h2>Male</h2>
            <h2>{configdata?.User?.email}</h2>
          </div>
        </div>
      </div>
      <div className="info-cover">
        <h1>Account Information</h1>
        <div className="info-flex">
          <div>
            <h2>Current Tier Level</h2>
            <h2>Account Status</h2>
            <h2>Account Balancee</h2>
            <h2>Account Opened</h2>
            <h2>Last Activity</h2>
          </div>
          <div>
            <h2>{configdata?.User?.upgraded}</h2>
            <h2>{configdata?.User?.status}</h2>
            <h2>N187,000</h2>
            <h2>{configdata?.createdAt?.split("T")[0]}</h2>
            <h2>{configdata?.createdAt?.split("T")[0]}</h2>
          </div>
        </div>
      </div>
      <div className="info-cover">
        <h1>Reward Points Overview</h1>
        <div className="info-flex">
          <div>
            <h2>Total Points Earned</h2>
            <h2>Points Expiry Date</h2>
          </div>
          <div>
            <h2>{configdata?.point}</h2>
            <h2>{configdata?.createdAt?.split("T")[0]}</h2>
          </div>
        </div>
      </div>
      <PriButton
        text="Manage Rewards"
        action={nextPage}
        type={null}
        active={true}
        load={null}
      />
    </div>
  )
}

export default Userdetails
