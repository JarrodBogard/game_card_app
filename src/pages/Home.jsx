import { useRef } from "react";
import { useNavigate } from "react-router";
import { Form } from "react-bootstrap";

const HomePage = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  let search = "";

  const handleSearch = (event) => {
    event.preventDefault();
    search = searchRef.current.value.trim().replaceAll(" ", "%20");
    navigate(`cards/${search}`);
  };

  return (
    <div className="container me-auto h-50 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center">Card Search</h1>
      <Form onSubmit={handleSearch}>
        <Form.Control
          className="w-500"
          type="text"
          placeholder="Search card by name e.g. Ysera, Cairne Bloodhoof"
          ref={searchRef}
        />
      </Form>
    </div>
  );
};

export default HomePage;
