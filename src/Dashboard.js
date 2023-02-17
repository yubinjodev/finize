import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import ProgressBar from "@ramonak/react-progress-bar";

export const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  const [budget, setBudget] = useState({
    data: {
      income: "",
      health: "",
      food: "",
      rent: "",
      transportation: "",
    },
  });
  const [incomeExpense, setIncomeExpense] = useState("");
  const [category, setCategory] = useState("food");
  useEffect(() => {
    const dbRef = ref(getDatabase(), `users/${user.uid}/budget/`);
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setBudget((budget) => ({ ...budget, data }));
    });
  }, [user.uid]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(incomeExpense)
    console.log(category)
    // set(ref(db, "users/" + user.uid + "/balance/"), {
    //   //TODO subtract budget category - expense
    //   //show current balance
    //   // shoe in progress bar the percentage of how much they spent
    // });
  };
  return (
    <>
      <div className="content">
        <div>Hi {user.email}</div>
        <h1>Dashboard</h1>
        <form onSubmit={submitHandler}>
          <input
            placeholder="$0"
            value={incomeExpense}
            onChange={(e) => setIncomeExpense(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Object.keys(budget.data).map((key) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
          <button>Add income</button>
          <button type="submit">Add Expense</button>
        </form>
        {Object.entries(budget.data).map(([key, value]) => {
          return (
            <div key={key}>
              <h1>{key}</h1>
              <h1>{value}</h1>
              <p>Budget</p>
              <ProgressBar completed={100} />
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};
