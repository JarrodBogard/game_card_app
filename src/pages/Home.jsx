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
