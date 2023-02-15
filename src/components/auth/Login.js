import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        login();
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="content">
        <h1 className="header">Sign in</h1>
        <form onSubmit={submitHandler}>
          <input
            placeholder="Email"
            type="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Password"
            type="Password"
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
