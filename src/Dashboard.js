import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import ProgressBar from "@ramonak/react-progress-bar";

export const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  const [incomeExpense, setIncomeExpense] = useState("");
  const [category, setCategory] = useState("food");
  const [wallet, setWallet] = useState({
    budget: {
      income: "",
      health: "",
      food: "",
      rent: "",
      transportation: "",
    },
    currentBalance: {
      income: "",
      health: "",
      food: "",
      rent: "",
      transportation: "",
    },
  });

  useEffect(() => {
    const dbBudgetRef = ref(getDatabase(), `users/${user.uid}/budget/`);
    onValue(dbBudgetRef, (snapshot) => {
      const budget = snapshot.val();
      setWallet((wallet) => ({ ...wallet, budget }));
    });

    const dbCurrentBalanceRef = ref(
      getDatabase(),
      `users/${user.uid}/currentBalance/`
    );
    onValue(dbCurrentBalanceRef, (snapshot) => {
      const currentBalance = snapshot.val();
      setWallet((wallet) => ({ ...wallet, currentBalance }));
    });
  }, [user.uid]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(incomeExpense);
    console.log(category);
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
            {/* {Object.keys(budget.data).map((key) => {
              return <option value={key}>{key}</option>;
            })} */}
          </select>
          <button>Add income</button>
          <button type="submit">Add Expense</button>
        </form>
        {Object.entries(wallet.budget).map(([key, value]) => {
          return (
            <>
              <h1>{key}</h1>
              <h1>${value}</h1>
              <p>Budget</p>
              <ProgressBar completed={100} />
              <hr />
            </>
          );
        })}
        {Object.values(wallet.currentBalance).map((value, index) => {
          return (
            <>
              <h1>{value}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};
