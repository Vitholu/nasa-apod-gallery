import React from 'react'
import "./header.css"
import { useSelector } from "react-redux"

const Header = () => {
  
  const userEmail = useSelector((state) => state.toggle.userEmail)
  const userConnectionMethod = useSelector((state) => state.toggle.logOrReg)
  
  return (
    <div className="header-root">
      <h1 className="header-font-logo" style={userEmail ? {paddingBottom: 12} : {paddingBottom: 48}}>Astronomy Picture of The Day</h1>
      { userConnectionMethod === "Register" ?
      <h1 className="succesful-login-register" style={{fontSize: 12, paddingBottom: 48}}>You have been succesfully registered with the following email: 
      <span style={{color: 'purple'}}>{userEmail}</span></h1>
      : userConnectionMethod === "Login" ?
      <h1 className="succesful-login-register" style={{fontSize: 12, paddingBottom: 48}}>Welcome back, 
      <span style={{color: 'purple'}}>{userEmail}</span></h1>
      : ""
      }
    </div>
  )
}

export default Header