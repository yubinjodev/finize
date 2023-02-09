import { Link } from "react-router-dom";

import { NavBar } from "../NavBar";

export const Login = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <h1 className="header">Sign in</h1>
        <form>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <Link to="../dashboard">
            <button className="primary-button" id="regular-button">
              Sign in
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};
