import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { SignUpStarter } from "./components/SignUpStarter";
import { Dashboard } from "./Dashboard";
import { History } from "./History";
import { NavBar } from "./components/NavBar";
import { PageNotFound } from "./components/PageNotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const publicRoutes = [
    {
      name: "Home",
      path: "/",
      element: <Home />,
    },
    {
      name: "Login",
      path: "/login",
      element: <Login login={() => setLoggedIn(true)} />,
    },
    {
      name: "Sign Up",
      path: "/signup",
      element: <SignUp login={() => setLoggedIn(true)} />,
    },
  ];

  const privateRoutes = [
    {
      name: "Sign Up Starter",
      path: "/sign-up-starter",
      element: <SignUpStarter />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      name: "History",
      path: "/history",
      element: <History />,
    },
  ];

  useEffect(() => {
    const data = window.localStorage.getItem("loggedIn");
    if (data !== null) setLoggedIn(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
  }, [loggedIn]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} logout={() => setLoggedIn(false)} />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          {publicRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
          {loggedIn &&
            privateRoutes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
