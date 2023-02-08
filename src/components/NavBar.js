import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />;
      </Link>
      <div className="button-container">
        <Link to="/login">
          <button className="primary-button">Sign in</button>
        </Link>

        <Link to="/signup">
          <button className="secondary-button">Sign up</button>
        </Link>
      </div>
    </div>
  );
};
