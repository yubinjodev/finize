import { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

export const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const dbRef = ref(getDatabase(), `users/${user.uid}/budget/`);

  const [budget, setBudget] = useState({
    income:"1000",
    food:"500",
    transportation:"200",
    rent:"450"
  });

  // useEffect(() => {
  //   onValue(dbRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setBudget((budget) => ({ ...budget, data }));
  //   });
  // }, []);

  return (
    <>
      <div className="content">
        <div>Hi {user.email}</div>
        <h1>Dashboard</h1>
        <>
        
        </>
      </div>
    </>
  );
};
