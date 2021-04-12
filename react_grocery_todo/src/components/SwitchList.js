import React from "react";
import { Link } from "react-router-dom";

function SwitchList() {
  return (
    <div className="ui fluid card">
      <div className="content">
        <p>
          <b>Input list ID:</b>
        </p>
        <input type="number" />
        <Link to="/GroceryList">
          <button>Go to list</button>
        </Link>
        <br />
        <br />
        Or, generate a new list:
        <button>Generate a new list</button>
      </div>
    </div>
  );
}

export default SwitchList;
