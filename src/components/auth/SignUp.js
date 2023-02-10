import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

import { useState } from "react";

import { NavBar } from "../NavBar";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("asdg");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1 className="header">Sign up</h1>
        <form onSubmit={submitHandler}>
          <input placeholder="Name" />
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
          <input placeholder="Re-enter Password" />
          <button type="submit" className="primary-button" id="regular-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
