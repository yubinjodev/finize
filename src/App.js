import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Dashboard } from "./components/Dashboard";

const AllRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
  },
  {
    name: "Sign Up",
    path: "/signup",
    element: <SignUp />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Dashboard />,
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {AllRoutes.map((route, index) => {
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
