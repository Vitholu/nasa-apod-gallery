import axios from "axios";

const _ = require('lodash')


const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_APOD_API_KEY;




const FetchData = async (prevID, {setDataArray, dataArray}) => {

  if (prevID > 0) {
    try {
      const { data } = await axios.get(baseUrl, { params: {
        count: `${String(prevID)}`,
        thumbs: true,
      }
    });
    if (!_.isEqual(data, dataArray)) {

      const combinedArray = [...dataArray, ...data]
      setDataArray(combinedArray)
      
    } else {
      console.log("no data yet");
    }
    
  } catch (error) {
    console.log(error);
  }
};
}

const arrayPicturesAPOD = async () => {
  console.log(await FetchData)
}





export {FetchData, arrayPicturesAPOD};