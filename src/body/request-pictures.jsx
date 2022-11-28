import axios from "axios";

const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_API_KEY;




const fetchDataWithAxios = async () => {
  
  const { data } = await axios.get(baseUrl);
  return data
};

const arrayPicturesAPOD = async () => {
  console.log(await fetchDataWithAxios)

}





export {fetchDataWithAxios, arrayPicturesAPOD};