import React from 'react'
import {fetchDataWithAxios} from "./request-pictures"

const Body = () => {
  fetchDataWithAxios();
  return (

    <div className="body-gallery">
    </div>
  )
}

export default Body