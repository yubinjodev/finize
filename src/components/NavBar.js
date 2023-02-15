import { useNavigate } from "react-router-dom";

import { getAuth, signOut } from "firebase/auth";

export const NavBar = ({ loggedIn, logout }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
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
      ;
      <div className="button-container">
        {loggedIn ? (
          <button
            className="primary-button"
            id="navbar-button"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};
