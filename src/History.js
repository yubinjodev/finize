import "./Calendar.css";

import { useState, useEffect } from "react";

import Calendar from "react-calendar";
import { getDatabase, ref, onValue } from "firebase/database";

export const History = () => {
  const options = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    // day: "numeric",
  };
  const [selectedDate, setSelectDate] = useState("");
  const user = JSON.parse(window.localStorage.getItem("user"));
  const db = getDatabase();
  useEffect(() => {
    const foodTable = ref(db, `users/${user.uid}/wallet/food/expenses`);

    const healthTable = ref(db, `users/${user.uid}/wallet/health/expenses`);

    const rentTable = ref(db, `users/${user.uid}/wallet/rent/expenses`);

    const transportationTable = ref(
      db,
      `users/${user.uid}/wallet/transportation/expenses`
    );
  }, [user.uid]);

  //get db values, calculate total income or expenese of that day, and show

  return (
    <>
      <div className="content">
        <Calendar
          onChange={(value, e) => {
            const valueString = JSON.stringify(value).slice(1, 11);
            setSelectDate(valueString);
          }}
        />
        <>
          <h1>Income : </h1>
          <h1>Expenses : </h1>
        </>
      </div>
    </>
  );
};
