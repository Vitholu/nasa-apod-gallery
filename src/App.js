import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./components/header/Header.jsx"
import Body from "./components/body/Body.jsx"
import Footer from "./components/footer/Footer.jsx"
import {FetchData} from "./components/body/RequestPictures.jsx"
import { v4 as uuidv4 } from 'uuid'
import Modal from "./components/modal/Modal.jsx"
import store from "./store.js"
import { Provider } from "react-redux"


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
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            <Header />
        </header>


        <div className="App-body">
          {
            mapData.map(card => {
              return <Body key={uuidv4()} dataArray={card} bool={_.isEmpty(card) ? false : true} thumbs={thumbnailURL}/>  
            })
          } 
          <button className="loader" onClick={handleClick}>
            {"Load More"}
          </button>
        </div>


        <div className="App-footer">
          <Footer/>
        </div>

        <Modal />
      </div>
    </Provider>
  );
}

export default App;


