import axios from "axios";

export const cardLoader = async ({ params }) => {
  try {
    const options = {
      method: "GET",
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${params.cardId}`,
      headers: {
        "X-RapidAPI-Key": "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
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
