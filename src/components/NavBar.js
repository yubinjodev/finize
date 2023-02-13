import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export const NavBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState(false);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     setUserStatus(true);
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     setUserStatus(false);
  //   }
  // });
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />;
      </Link>
      <div className="button-container">
        {userStatus ? (
          <>
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                    alert("log out successful");
                    navigate("/");
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="primary-button" id="navbar-button">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="secondary-button" id="navbar-button">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
