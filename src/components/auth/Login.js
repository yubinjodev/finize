import { useState } from "react";

import { NavBar } from "../NavBar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <div className="content">
        <h1 className="header">Sign in</h1>
        <form>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="primary-button" id="regular-button">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};
