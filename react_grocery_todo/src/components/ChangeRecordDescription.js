import React from "react";
import { Link } from "react-router-dom";

class ChangeRecordDescription extends React.Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="content">
          <h3>Enter the new description for the record:</h3>
          <input />
          <Link to="/GroceryList">
            <button>Apply changes</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ChangeRecordDescription;
