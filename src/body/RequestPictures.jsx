import axios from "axios";

const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_API_KEY;




const FetchData = async ({setDataArray}) => {
  try {
    const { data } = await axios.get(baseUrl, { params: {
      count: "12",
      thumbs: true,
    }
    });
    // console.log(await data)
    setDataArray(data)
    
  } catch (error) {
    console.log(error);
  }
};

const arrayPicturesAPOD = async () => {
  console.log(await FetchData)

}





export {FetchData, arrayPicturesAPOD};