import "./footer.css"
import ProfileIcon from "../../assets/profile_icon.svg"
import FavoriteIcon from "../../assets/bookmark_icon.svg"

import React from 'react'


const Footer = () => {
  return (      
    <div className="footer-bg">
      <ul className="footer-nav">
        <li><img src={FavoriteIcon} alt="" /></li>
        <li><img className="profile-scale-icon" src={ProfileIcon} alt="" /></li>
      </ul>
    </div>
  )
}

export default Footer