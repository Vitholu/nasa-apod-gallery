import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./header/Header.jsx"
import Body from "./body/Body.jsx"
import {FetchData} from "./body/RequestPictures.jsx"


function App() {

  const [dataArray, setDataArray] = useState([])
  const [thumbnailURL, setThumbnailURL] = useState([])
  const [noVideo, setNoVideo] = useState(false)
  
  useEffect(() => {
    if (dataArray.length === 0) {
      FetchData({setDataArray})
      console.log(dataArray)
    }
    
  }, [dataArray]);
  
  
  const [data, setData] = useState([])
  
  useEffect(() => {
    if (data.length !== 0) {
      console.log("thumn")
      if (!data.filter(x=> x.media_type === "video")) {
        setNoVideo(true)
      }
      setThumbnailURL(data.filter(x=> x.media_type === "video"))
    } 
    
    return () => {
      console.log("run: ")
    }
  }, [data])


  function LoadedDataArray(id) {

    if (dataArray.length !== 0 && data.length === 0) {
      setData(...data, dataArray)
    }
    
    if (dataArray.length !== 0 && data.length !== 0 && thumbnailURL.length !== 0) {
      return <Body id={id} dataArray={dataArray} bool={true} thumbs={thumbnailURL}/>  
    } else if (dataArray.length !== 0 && data.length !== 0) {
      return <Body id={id} dataArray={dataArray} bool={noVideo} thumbs={thumbnailURL}/>  
    }

  
  }    
    
    
    
    return (
      <>
    <div className="App">
      <header className="App-header">
          <Header />
      </header>

      <div className="body">
        <div className="App-body">
          {LoadedDataArray(0)}
          {LoadedDataArray(1)}
          {LoadedDataArray(2)}
          {LoadedDataArray(3)}
          {LoadedDataArray(4)}
          {LoadedDataArray(5)}
          {LoadedDataArray(6)}
          {LoadedDataArray(7)}
          {LoadedDataArray(8)}
          {LoadedDataArray(9)}
          {LoadedDataArray(10)}
          {LoadedDataArray(11)}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
