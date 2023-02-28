import { useState, useEffect } from "react";

import { getDatabase, ref, onValue, set } from "firebase/database";
import ProgressBar from "@ramonak/react-progress-bar";

export const Dashboard = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const db = getDatabase();
  const [incomeExpense, setIncomeExpense] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("food");
  const [wallet, setWallet] = useState({
    income: {
      budget: "",
      currentBalance: "",
    },
    health: {
      budget: "",
      currentBalance: "",
    },
    food: {
      budget: "",
      currentBalance: "",
    },
    rent: {
      budget: "",
      currentBalance: "",
    },
    transportation: {
      budget: "",
      currentBalance: "",
    },
  });

  useEffect(() => {
    const dbIncomeRef = ref(getDatabase(), `users/${user.uid}/wallet/income`);
    onValue(dbIncomeRef, (snapshot) => {
      const income = snapshot.val();
      setWallet((wallet) => ({ ...wallet, income }));
    });

    const dbHealthRef = ref(getDatabase(), `users/${user.uid}/wallet/health`);
    onValue(dbHealthRef, (snapshot) => {
      const health = snapshot.val();
      setWallet((wallet) => ({ ...wallet, health }));
    });

    const dbFoodRef = ref(getDatabase(), `users/${user.uid}/wallet/food`);
    onValue(dbFoodRef, (snapshot) => {
      const food = snapshot.val();
      setWallet((wallet) => ({ ...wallet, food }));
    });

    const dbRentRef = ref(getDatabase(), `users/${user.uid}/wallet/rent`);
    onValue(dbRentRef, (snapshot) => {
      const rent = snapshot.val();
      setWallet((wallet) => ({ ...wallet, rent }));
    });

    const dbTransportationRef = ref(
      getDatabase(),
      `users/${user.uid}/wallet/transportation`
    );
    onValue(dbTransportationRef, (snapshot) => {
      const transportation = snapshot.val();
      setWallet((wallet) => ({ ...wallet, transportation }));
    });
  }, [user.uid]);

  const addExpense = (e) => {
    e.preventDefault();
    const newIncomeBalance = wallet.income.currentBalance - incomeExpense;
    set(
      ref(db, "users/" + user.uid + "/wallet/income/currentBalance"),
      newIncomeBalance
    );
    const newBalance = wallet[category].currentBalance - incomeExpense;
    set(
      ref(db, "users/" + user.uid + `/wallet/${category}/currentBalance`),
      newBalance
    );
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    set(
      ref(
        db,
        "users/" + user.uid + `/wallet/${category}/expenses/${date}/${time}`
      ),
      {
        description: desc,
        amount: incomeExpense,
      }
    );
    setIncomeExpense("");
    setDesc("");
  };

  const addIncome = (e) => {
    e.preventDefault();
    const newIncomeBalance =
      parseInt(wallet.income.currentBalance) + parseInt(incomeExpense);
    set(
      ref(db, "users/" + user.uid + "/wallet/income/currentBalance"),
      newIncomeBalance
    );
    const newBalance =
      parseInt(wallet[category].currentBalance) + parseInt(incomeExpense);
    set(
      ref(db, "users/" + user.uid + `/wallet/${category}/currentBalance`),
      newBalance
    );
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    set(
      ref(
        db,
        "users/" + user.uid + `/wallet/${category}/income/${date}/${time}`
      ),
      {
        time: time,
        description: desc,
        amount: incomeExpense,
      }
    );
    setIncomeExpense("");
    setDesc("");
  };

  return (
    <>
      <div className="content">
        <h1>Dashboard</h1>
        <form>
          <input
            placeholder="$0"
            value={incomeExpense}
            onChange={(e) => setIncomeExpense(e.target.value)}
          />
          <input
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Object.keys(wallet).map((key) => {
              return <option value={key}>{key}</option>;
            })}
          </select>
          <button
            id="regular-button"
            className="primary-button"
            onClick={addIncome}
          >
            Add income
          </button>
          <button
            id="regular-button"
            className="secondary-button"
            onClick={addExpense}
          >
            Add Expense
          </button>
        </form>
        {Object.entries(wallet).map(([key, value]) => {
          const completed = parseInt(
            ((value.budget - value.currentBalance) / value.budget) * 100
          );
          return (
            <>
              {isNaN(completed) ? (
                <div></div>
              ) : (
                <div>
                  <h1>{key}</h1>
                  <h1>${value.budget}</h1>
                  <p>Budget</p>
                  <h1>${value.currentBalance}</h1>
                  <p>Current Balance</p>
                  <ProgressBar completed={completed} />
                  <p>You have used {completed}% of your budget</p>
                  <hr />
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
