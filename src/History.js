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

  const handleIncomeExpense = (date, e) => {
    const valueString = JSON.stringify(date);
    setSelectDate(valueString);
    console.log(date);
    console.log(selectedDate);
    //blocked path : date is an object. when JSONstringified, it returns a wrong
    //date. it is not a timezone issue. the date and the converted date
    // are too far apart to be even considered a timezone issue.
  };

  useEffect(() => {
    const foodTable = ref(db, `users/${user.uid}/wallet/food/expenses`);

    const healthTable = ref(db, `users/${user.uid}/wallet/health/expenses`);

    const rentTable = ref(db, `users/${user.uid}/wallet/rent/expenses`);

    const transportationTable = ref(
      db,
      `users/${user.uid}/wallet/transportation/expenses`
    );
  }, [user.uid, db]);

  return (
    <>
      <div className="content">
        <Calendar onChange={handleIncomeExpense} />
        <>
          <h1>Income : </h1>
          <h1>Expenses : </h1>
        </>
      </div>
    </>
  );
};
