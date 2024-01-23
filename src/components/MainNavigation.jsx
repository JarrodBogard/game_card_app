import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
