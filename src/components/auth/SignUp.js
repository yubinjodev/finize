import { NavBar } from "../NavBar";

import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1 className="header">Sign up</h1>
        <form className="content">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Re-enter Password" />
          <Link to="../dashboard">
            <button className="primary-button">Sign up</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
