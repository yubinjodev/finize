import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

export const SignUpStarter = ({ id }) => {
  const navigate = useNavigate();
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
    console.log(id);
    set(ref(db, "users/" + id + "/budget/"), {
      income: budget.income,
      health: budget.health,
      food: budget.food,
      rent: budget.rent,
      transportation: budget.transportation,
    });
    navigate("/dashboard",{id:id});
  };
  return (
    <>
      <div className="content">
        <h1 className="header">
          Hi {id}!
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
