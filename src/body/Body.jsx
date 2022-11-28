import "./body.css";
import React, {useEffect, useState} from 'react'
import {fetchDataWithAxios} from "./request-pictures"





const Body = (props) => {

  const [currentPic, setCurrentPic] = useState("Loading...")
  

  useEffect(() => {
    const response = async () => {
      const res = await fetchDataWithAxios();
      setCurrentPic(res)
      console.log(res)
    }

    response();
  }, [])

  useEffect(() => {
    console.log(`Second effect: ${currentPic}`)
  })
  
  return (
    <ul className="scroll-gallery">
      <li key={currentPic[props.id].date}><img src={currentPic[props.id].thumbnail_url ? currentPic[props.id].thumbnail_url : currentPic[props.id].url} alt="" />
        <div className="date-descr">
          <h5>{currentPic[props.id].title}</h5>
          <p>{currentPic[props.id].explanation}</p>
        </div>
          <h6 className="date">Date: {currentPic[props.id].date}</h6>
      </li>
    </ul>
  )
}

export default Body