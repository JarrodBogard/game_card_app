import { useRef } from "react";
import { Form } from "react-bootstrap";

// const API_URL =

const HomePage = () => {
  const searchRef = useRef(null);
  //   const typeRef = useRef(null);
  let search = "";

  const options = {
    method: "GET",
    url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${search}`,
    headers: {
      "X-RapidAPI-Key": "cbfa4a4bedmsh6ac359a971f3627p12ba07jsn040823bec505",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    },
  };

  const handleSearch = (event) => {
    event.preventDefault();

    search = searchRef.current.value.trim().replaceAll(" ", "%20");
    console.log(search);
  };

  return (
    <div className="container">
      <h1>Card Search</h1>
      <Form onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search card by name e.g. Ysera, Cairne Bloodhoof"
          ref={searchRef}
        />
      </Form>
    </div>
  );
};

export default HomePage;
