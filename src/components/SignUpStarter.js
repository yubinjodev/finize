import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export const SignUpStarter = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getDatabase();
  // const [budget, setBudget] = useState({
  //   income: "",
  //   health: "",
  //   food: "",
  //   rent: "",
  //   transportation: "",
  // });
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
  const submitHandler = (e) => {
    e.preventDefault();
    set(ref(db, "users/" + user.uid + "/wallet/income"), {
      budget: wallet.income.budget,
      currentBalance: wallet.income.currentBalance
    });
    set(ref(db, "users/" + user.uid + "/wallet/health"), {
      budget: wallet.health.budget,
      currentBalance: wallet.health.currentBalance
    });
    set(ref(db, "users/" + user.uid + "/wallet/food"), {
      budget: wallet.food.budget,
      currentBalance: wallet.food.currentBalance
    });
    set(ref(db, "users/" + user.uid + "/wallet/rent"), {
      budget: wallet.rent.budget,
      currentBalance: wallet.rent.currentBalance
    });
    set(ref(db, "users/" + user.uid + "/wallet/transportation"), {
      budget: wallet.transportation.budget,
      currentBalance: wallet.transportation.currentBalance
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
            value={wallet.income.budget}
            onChange={(e) => {
              setWallet((prevState) => {
                wallet.income.budget = e.target.value;
                wallet.income.currentBalance = e.target.value;
                return { ...prevState };
              });
            }}
          />
          <hr />
          <p>How much do you plan to spend per category?</p>
          <p>Health</p>
          <input
            placeholder="$0"
            value={wallet.health.budget}
            onChange={(e) => {
              setWallet((prevState) => {
                wallet.health.budget = e.target.value;
                wallet.health.currentBalance = e.target.value;
                return { ...prevState };
              });
            }}
          />
          <p>Food</p>
          <input
            placeholder="$0"
            value={wallet.food.budget}
            onChange={(e) => {
              setWallet((prevState) => {
                wallet.food.budget = e.target.value;
                wallet.food.currentBalance = e.target.value;
                return { ...prevState };
              });
            }}
          />
          <p>Rent</p>
          <input
            placeholder="$0"
            value={wallet.rent.budget}
            onChange={(e) => {
              setWallet((prevState) => {
                wallet.rent.budget = e.target.value;
                wallet.rent.currentBalance = e.target.value;
                return { ...prevState };
              });
            }}
          />
          <p>Transportation</p>
          <input
            placeholder="$0"
            value={wallet.transportation.budget}
            onChange={(e) => {
              setWallet((prevState) => {
                wallet.transportation.budget = e.target.value;
                wallet.transportation.currentBalance = e.target.value;
                return { ...prevState };
              });
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
