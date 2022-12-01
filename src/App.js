import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./header/Header.jsx"
import Body from "./body/Body.jsx"
import {FetchData} from "./body/RequestPictures.jsx"
import { v4 as uuidv4 } from 'uuid';


const _ = require("lodash")

function App() {

  const [dataArray, setDataArray] = useState([])
  const [thumbnailURL, setThumbnailURL] = useState([])
  const [mapData, setMapData] = useState([])
  
  
  if (!_.isEqual(mapData, dataArray)) {
    setMapData(dataArray.map(x => x))
  }



  useEffect(() => {
    if (dataArray.length === 0 || dataArray.length < 12) {
      FetchData(12, {setDataArray, dataArray})
      console.log(dataArray)
    }
  }, [dataArray]);
  
  
  
  useEffect(() => {
    if (mapData.length !== 0) {
      setThumbnailURL(mapData.filter(x=> x.media_type === "video"))
    } 
    
    return () => {
    }
  }, [mapData])

  const handleClick = () => {
    FetchData(12, {setDataArray, dataArray})
  }

  
    
    return (
      <>
    <div className="App">
      <header className="App-header">
          <Header />
      </header>

      <div className="body">
        <div className="App-body">

          {
            mapData.map(card => {
              return <Body key={uuidv4()} dataArray={card} bool={_.isEmpty(card) ? false : true} thumbs={thumbnailURL}/>  
            })
          } 

          <button onClick={handleClick}>
            {
              "Load More"
            }
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;


