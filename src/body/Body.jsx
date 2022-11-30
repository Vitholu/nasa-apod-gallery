import "./body.css";
import React from 'react'


const Body = (props, {dataArray}) => {
   console.log(props);
  
  return (
    <ul className="scroll-gallery" id={props.id}>
      <li key={props.id}>
        <img key={props.id} src={ props.bool ? (props.dataArray[props.id].hasOwnProperty("thumbnail_url") ? props.dataArray[props.id].thumbnail_url : props.dataArray[props.id].url) : "Loading..."} alt="" />
        <div key={props.id} className="date-descr">
          <h5>{props.bool ? props.dataArray[props.id].title : "Loading..."}</h5>
          <p>{props.bool ? props.dataArray[props.id].explanation : "Loading..."}</p>
        </div>
        <div key={props.id} className="copy-date">
          <h6 className="copyright">{props.bool ? (props.dataArray[props.id].hasOwnProperty('copyright') ? "© " + props.dataArray[props.id].copyright : "No copyright holder") : "Loading..."}</h6>
          <h6 className="date">Date: {props.bool ? props.dataArray[props.id].date : "Loading..."}</h6>
        </div>
      </li>
    </ul>
  )
}

export default Body