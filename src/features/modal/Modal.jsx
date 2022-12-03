import "./modal.css"
import React from "react"
import {useSelector} from "react-redux"



const Modal = () => {
  
  const toggle = useSelector((state) => state.toggle.value)


  return (
    <>
    {
    toggle ? 
    <style>
      {
        `.App {
          background-color: rgb(220,220,220) !important;
        }
        
        .scroll-gallery {
          display: none;
        }

        .loader {
          display: none;
        }
        `
      }
    </style>
    : ""
    }

    {toggle ? 
    
      <input type="text" name="name" />
    
    
    : ""}
    </>
  )
}

export default Modal