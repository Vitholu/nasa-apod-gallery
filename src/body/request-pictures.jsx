import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + APIKEY;

const fetchDataWithAxios = async () => {
  const { data } = await axios.get(baseUrl);
  console.log(data);
};







export {fetchDataWithAxios};