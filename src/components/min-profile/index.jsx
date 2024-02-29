import React from "react"
import profileImage from "../../assets/mini_profil_img.png"
import "./styles.css"
const MiniProfile = ({ name, email, last }) => {
  return (
    <div className="profile">
      <img width={48} height={48} src={profileImage} />
      <div className="profile-name">
        <p>
          {name} {last}
        </p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default MiniProfile
