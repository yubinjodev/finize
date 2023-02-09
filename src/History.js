import "./Calendar.css";

import { NavBar } from "./components/NavBar";
import Calendar from "react-calendar";

export const History = () => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    // day: "numeric",
  };
  const today = new Date().toLocaleDateString("en-US", options);

  return (
    <>
      <NavBar />
      <div className="content">
        <h1>{today}</h1>
        <Calendar />
      </div>
    </>
  );
};
