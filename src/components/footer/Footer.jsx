import "./footer.css"
import { useDispatch } from 'react-redux'
import { toggleModal } from '../../features/modal/modalSlice.js'
import React from 'react'
import ProfileIcon from "../../assets/profile_icon.svg"
import FavoriteIcon from "../../assets/bookmark_icon.svg"


const Footer = () => {
  const dispatch = useDispatch()

  return (      
    <div className="footer-bg">
      <ul className="footer-nav">
        <li><img src={FavoriteIcon} alt="" /></li>
        <li onClick={() => dispatch(toggleModal())}><img className="profile-scale-icon" src={ProfileIcon} alt=""/></li>
      </ul>
    </div>
  )
}

export default Footer