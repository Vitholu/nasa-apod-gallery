import "./body.css";
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Body = (props, {dataArray}) => {
   console.log(props);
  
  return (
    <ul className="scroll-gallery" id={props.id}>
      <li key={uuidv4()}>
        <img key={uuidv4()} src={ props.bool ? (props.dataArray[props.id].hasOwnProperty("thumbnail_url") ? props.dataArray[props.id].thumbnail_url : props.dataArray[props.id].url) : "Loading..."} alt="" />
        <div key={uuidv4()} className="date-descr">
          <h5>{props.bool ? props.dataArray[props.id].title : "Loading..."}</h5>
          <p>{props.bool ? props.dataArray[props.id].explanation : "Loading..."}</p>
        </div>
        <div key={uuidv4()} className="copy-date">
          <h6 className="copyright">{props.bool ? (props.dataArray[props.id].hasOwnProperty('copyright') ? "© " + props.dataArray[props.id].copyright : "No copyright holder") : "Loading..."}</h6>
          <h6 className="date">Date: {props.bool ? props.dataArray[props.id].date : "Loading..."}</h6>
        </div>
      </li>
    </ul>
  )
}

export default Body