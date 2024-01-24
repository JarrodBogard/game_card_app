import axios from "axios";

const API_URL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/";
const API_HEADERS = {
  "X-RapidAPI-Key": "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
  "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
};

export const cardDetailsLoader = async ({ params }) => {
  try {
    const options = {
      method: "GET",
      url: `${API_URL}${params.card}`,
      headers: API_HEADERS,
    };

    const response = await axios.request(options);

    if (response.status !== 200) {
      console.log(response);
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export const cardsLoader = async () => {
  try {
    // const options = {
    //   method: "GET",
    //   url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
    //   headers: API_HEADERS,
    // };
    const response = await axios.get(
      "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
      {
        headers: {
          "X-RapidAPI-Key":
            "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
          "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        },
      }
    );

    if (response.status !== 200) {
      console.log(response.status);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
