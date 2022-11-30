import './App.css';
import React, {useState, useEffect, useRef, useCallback} from "react"
import Header from "./header/Header.jsx"
import Body from "./body/Body.jsx"
import {FetchData} from "./body/RequestPictures.jsx"
const _ = require("lodash")

function App() {

  const [dataArray, setDataArray] = useState([])
  const [thumbnailURL, setThumbnailURL] = useState([])
  const [mapData, setMapData] = useState([])
  const [listKey, setListKey] = useState(0)

  const [prevId, setPrevId] = useState(12)
  const [toggleScroll, setToggleScroll] = useState(true)
  
  const AppBodyRef = useRef(null)
  

  // Clear mapped array
  if (!_.isEqual(mapData, dataArray)) {
    console.log(dataArray);
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
      console.log("thumn")
      setThumbnailURL(mapData.filter(x=> x.media_type === "video"))
    } 
    
    return () => {
      console.log("Clean up: 4")
    }
  }, [mapData])

  const handleClick = () => {
    FetchData(12, {setDataArray, dataArray})
    setToggleScroll(!toggleScroll)
  }

  
    
    return (
      <>
    <div className="App">
      <header className="App-header">
          <Header />
      </header>

      <div className="body">
        <div className="App-body" ref={AppBodyRef}>

          {
            mapData.map(card => {
              return <Body id={listKey} dataArray={card} bool={false} thumbs={thumbnailURL}/>  
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


/* 
  Use map to get 12 posts
  Clear the array after rendering 12 posts
  render array onClick
  Request new array onClick with the default value being 12 posts
*/