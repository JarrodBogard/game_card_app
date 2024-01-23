import axios from "axios";

export const cardLoader = async (search) => {
  const options = {
    method: "GET",
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${search}`,
    headers: {
      "X-RapidAPI-Key": "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
