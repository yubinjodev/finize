import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import { getDatabase, ref, set } from "firebase/database";
import { toast } from "react-toastify";

export const SignUp = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();
  const submitHandler = (e) => {
    e.preventDefault();
    password.length < 6
      ? toast.warn("Your password should be at least 6 characters")
      : toast.success("Sign up successful");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.localStorage.setItem("user", JSON.stringify(user));
        login();
        set(ref(db, "users/" + user.uid), {
          email: email,
          password: password,
        });
        navigate("/sign-up-starter");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="content">
        <h1 className="header">Sign up</h1>
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
