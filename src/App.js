import './App.css';
import React, {useState, useEffect} from "react"
import Header from "./header/Header.jsx"
import Body from "./body/Body.jsx"
import {FetchData} from "./body/RequestPictures.jsx"


function App() {

  const [dataArray, setDataArray] = useState(undefined)


  useEffect(() => {
    if (dataArray === undefined) {
      FetchData({setDataArray})
      console.log(dataArray)
    }

  }, [dataArray]);


  function LoadedDataArray(id) {
    if (dataArray !== undefined) {
      const data = [...dataArray]
      if (data.find(x => x.media_type === "video")) {
        return <Body id={id} dataArray={dataArray} bool={true} thumbs={true}/>
      } else if(data.find(x => x.media_type === "image")){
        return <Body id={id} dataArray={dataArray} bool={true} thumbs={false}/>
      }
      <Body id={id} dataArray={dataArray} bool={true} thumbs={false}/>
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
