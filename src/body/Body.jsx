import "./body.css";
import React from 'react'





const Body = (props, {dataArray}) => {
  console.log(props);
  
  return (
    <ul className="scroll-gallery">
      <li key={props.bool ? props.dataArray[props.id] : "Loading..."}>

        {}

        <img src={

        props.dataArray[props.id].thumbnail_url !== undefined ? 
        (props.dataArray[props.id].thumbnail_url !== "Loading..." ? props.dataArray[props.id].thumbnail_url : props.dataArray[props.id].url) 
        : props.dataArray[props.id].url} alt="" />
        <div className="date-descr">
          <h5>{props.bool ? props.dataArray[props.id].title : "Loading..."}</h5>
          <p>{props.bool ? props.dataArray[props.id].explanation : "Loading..."}</p>
        </div>
        <div className="copy-date">
          <h6 className="copyright">{props.dataArray[props.id].hasOwnProperty('copyright') ? "© " + props.dataArray[props.id].copyright : "No copyright holder"}</h6>
          <h6 className="date">Date: {props.bool ? props.dataArray[props.id].date : "Loading..."}</h6>
        </div>
      </li>
    </ul>
  )
}

export default Body