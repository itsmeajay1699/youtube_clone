import axios from "axios";

export const fetchFromApi = async (srl) => {
  const options = {
    method: "GET",
    url: `https://youtube-v31.p.rapidapi.com/${srl}`,
    params: {maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": "34ab2d7dacmshba90af177aee93cp1ca474jsn1d7000379f90",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  let res = null;
  try {
    const response = await axios.request(options);
    res = response.data;
  } catch (err) {
    console.log(err);
  }
  return res;
};
