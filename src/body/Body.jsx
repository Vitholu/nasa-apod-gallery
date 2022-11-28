import "./body.css";
import React from 'react'





const Body = (props, {dataArray}) => {
  console.log({dataArray});
  return (
    <ul className="scroll-gallery">
      <li key={props.bool ? props.dataArray[props.id] : "Loading..."}><img src={props.thumbs ? props.dataArray[props.id].thumbnail_url 
      : props.dataArray[props.id].url} alt="" />
        <div className="date-descr">
          <h5>{props.bool ? props.dataArray[props.id].title : "Loading..."}</h5>
          <p>{props.bool ? props.dataArray[props.id].explanation : "Loading..."}</p>
        </div>
          <h6 className="date">Date: {props.bool ? props.dataArray[props.id].date : "Loading..."}</h6>
      </li>
    </ul>
  )
}

export default Body