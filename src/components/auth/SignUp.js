import { NavBar } from "../NavBar";

import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1 className="header">Sign up</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Re-enter Password" />
          <Link to="../sign-up-starter">
            <button className="primary-button" id="regular-button">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
