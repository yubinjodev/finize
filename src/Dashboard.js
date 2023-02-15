import { useState } from "react";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

export const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const dbRef = ref(getDatabase());

  const [budget, setBudget] = useState([]);

  // get(child(dbRef, `users/${user.uid}/budget/`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setBudget(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // console.log(budget);

  return (
    <>
      <div className="content">
        <div>Hi {user.email}</div>
        <h1>Dashboard</h1>
        <>
          {/* {budget.map((category, index) => (
            <h1>{category.food}</h1>
          ))} */}
        </>
      </div>
    </>
  );
};
