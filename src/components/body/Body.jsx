import "./body.css";
import React from 'react'



const Body = (props, {dataArray}) => {
  
  

  return (
    <ul className="scroll-gallery" >
      <li>
        <img src={ props.bool ? (props.dataArray.hasOwnProperty("thumbnail_url") ? props.dataArray.thumbnail_url : props.dataArray.url) : "Loading..."} alt="" />
        <div className="date-descr">
          <h5>{props.bool ? props.dataArray.title : "Loading..."}</h5>
          <p>{props.bool ? props.dataArray.explanation : "Loading..."}</p>
        </div>
        <div className="copy-date">
          <h6 className="copyright">{props.bool ? (props.dataArray.hasOwnProperty('copyright') ? "© " + props.dataArray.copyright : "No copyright holder") : "Loading..."}</h6>
          <h6 className="date">Date: {props.bool ? props.dataArray.date : "Loading..."}</h6>
        </div>
      </li>
    </ul>
  )
}

export default Body