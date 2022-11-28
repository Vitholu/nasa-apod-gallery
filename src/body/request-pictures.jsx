import axios from "axios";

const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=" + process.env.REACT_APP_API_KEY;




const fetchDataWithAxios = async () => {
  try {
    const { data } = await axios.get(baseUrl, { params: {
      start_date: "2022-11-01",
      end_date: "2022-11-28",
      thumbs: true,
    }
    });
    return data
    
  } catch (error) {
    console.log(error);
  }
};

const arrayPicturesAPOD = async () => {
  console.log(await fetchDataWithAxios)

}





export {fetchDataWithAxios, arrayPicturesAPOD};