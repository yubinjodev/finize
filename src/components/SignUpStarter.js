import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const SignUpStarter = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  const [budget, setBudget] = useState({
    income: "",
    health: "",
    food: "",
    rent: "",
    transportation: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    set(ref(db, "users/" + user.uid + "/budget/"), {
      Income: budget.income,
      Health: budget.health,
      Food: budget.food,
      Rent: budget.rent,
      Transportation: budget.transportation,
    });
    set(ref(db, "users/" + user.uid + "/currentBalance/"), {
      Income: budget.income,
      Health: budget.health,
      Food: budget.food,
      Rent: budget.rent,
      Transportation: budget.transportation,
    });
    navigate("/dashboard");
  };
  return (
    <>
      <div className="content">
        <h1 className="header">
          Hi {user.email}!
          <br />
          Let's get started.
        </h1>
        <form onSubmit={submitHandler}>
          <p>Monthly income</p>
          <input
            placeholder="$0"
            value={budget.income}
            onChange={(e) => {
              setBudget({ ...budget, income: e.target.value });
            }}
          />
          <hr />
          <p>How much do you plan to spend per category?</p>
          <p>Health</p>
          <input
            placeholder="$0"
            value={budget.health}
            onChange={(e) => {
              setBudget({ ...budget, health: e.target.value });
            }}
          />
          <p>Food</p>
          <input
            placeholder="$0"
            value={budget.food}
            onChange={(e) => {
              setBudget({ ...budget, food: e.target.value });
            }}
          />
          <p>Rent</p>
          <input
            placeholder="$0"
            value={budget.rent}
            onChange={(e) => {
              setBudget({ ...budget, rent: e.target.value });
            }}
          />
          <p>Transportation</p>
          <input
            placeholder="$0"
            value={budget.transportation}
            onChange={(e) => {
              setBudget({ ...budget, transportation: e.target.value });
            }}
          />
          <p>+ Add custom category</p>
          <button type="submit" className="primary-button" id="regular-button">
            Done
          </button>
        </form>
      </div>
    </>
  );
};
