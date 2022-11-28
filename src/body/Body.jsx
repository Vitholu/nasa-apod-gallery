import "./body.css";
import React, {useEffect, useState} from 'react'
import {fetchDataWithAxios} from "./request-pictures"





const Body = () => {

  const [currentPic, setCurrentPic] = useState({})
  

  useEffect(() => {
    const response = async () => {
      const res = await fetchDataWithAxios();
      setCurrentPic(res)
    }

    response();
  }, [])

  useEffect(() => {
    console.log(`Second effect: ${currentPic}`)
  })
  
// Return gallery element
  return (
    <ul className="scroll-gallery">
      <li key={currentPic.date}><img src={currentPic.url} alt="" />
        <div className="date-descr">
          <h5>{currentPic.title}</h5>
          <p>{currentPic.explanation}</p>
        </div>
          <h6 className="date">Date: {currentPic.date}</h6>
      </li>
    </ul>
  )
}

export default Body