import { useNavigate } from "react-router-dom";
import "./Menu.css";

import { getAuth, signOut } from "firebase/auth";
import { elastic as Menu } from "react-burger-menu";

export const NavBar = ({ loggedIn, logout }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.clear();
        logout();
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="nav-container">
      <img
        src={process.env.PUBLIC_URL + "/logo.jpg"}
        alt="logo"
        onClick={() => navigate("/")}
      />
      {loggedIn ? (
        <Menu right>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/dashboard")}>Dashboard</li>
            <li onClick={() => navigate("/history")}>History</li>
            <li onClick={handleSignOut}>Sign Out</li>
          </ul>
        </Menu>
      ) : (
        <div className="button-container">
          <button
            className="primary-button"
            id="navbar-button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
          <button
            className="secondary-button"
            id="navbar-button"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};
