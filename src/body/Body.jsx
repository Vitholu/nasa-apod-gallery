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
  

  return (
    <div className="body-gallery">
      <img src={currentPic.url} alt="" />
    </div>
  )
}

export default Body