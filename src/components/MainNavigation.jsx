import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg text-bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand pt-0 text-white " to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li>
                <Link className="nav-link active text-white" to="cards">
                  All cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="classes">
                  Cards by class
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="types">
                  Cards by type
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
