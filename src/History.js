import "./Calendar.css";

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
      <div className="content">
        <h1>{today}</h1>
        <Calendar />
      </div>
    </>
  );
};
