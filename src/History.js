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
  const [selectedDate, setSelectDate] = useState(new Date());
  const [stringDate, setStringDate] = useState("")
  const user = JSON.parse(window.localStorage.getItem("user"));
  const db = getDatabase();

  useEffect(() => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth() + 1;
    const year = selectedDate.getFullYear();
    const formatedDate = year + "-" + month + "-" + day;
    
    setStringDate(formatedDate)
  }, [selectedDate]);

  useEffect(() => {
    // const foodTable = ref(db, `users/${user.uid}/wallet/food/expenses`);

    // const healthTable = ref(db, `users/${user.uid}/wallet/health/expenses`);

    // const rentTable = ref(db, `users/${user.uid}/wallet/rent/expenses`);

    // const transportationTable = ref(
    //   db,
    //   `users/${user.uid}/wallet/transportation/expenses`
    // );
  }, [stringDate]);

  return (
    <>
      <div className="content">
        <Calendar onChange={setSelectDate} value={selectedDate} />
        <>
          <h1>Income : </h1>
          <h1>Expenses : </h1>
        </>
      </div>
    </>
  );
};
