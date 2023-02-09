import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";

export const SignUpStarter = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <h1 className="header">
          Hi Maddie!
          <br />
          Let's get started.
        </h1>
        <form>
          <p>Monthly income</p>
          <input placeholder="$0" />
          <hr />
          <p>How much do you plan to spend per category?</p>
          <p>Health</p>
          <input placeholder="$0" />
          <p>Food</p>
          <input placeholder="$0" />
          <p>Rent</p>
          <input placeholder="$0" />
          <p>Transportation</p>
          <input placeholder="$0" />
          <p>+ Add custom category</p>
          <Link to="/dashboard">
            <button className="primary-button" id="regular-button">
              Done
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};
