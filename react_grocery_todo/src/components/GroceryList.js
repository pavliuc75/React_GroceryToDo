import React from "react";
import { Link } from "react-router-dom";

function GroceryList() {
  return (
    <div className="ui fluid card">
      <div className="content">
        <p>
          <b>
            List Unique ID: <em>@record.Id </em>
            <span>
              <button>Copy</button>
            </span>
          </b>
        </p>
        <p>
          <Link to="/">Switch list</Link>
        </p>
        <hr />
        <p>
          Description: <em>@record.Description</em>
        </p>
        <hr />
        <em>Uncompleted</em>

        <br />
        <em>Completed</em>
        <span>
          <button class="@CompletedTableIcon"></button>
        </span>
        <div class="@CompletedTableCssClass"></div>
        <hr />
        <Link to="/AddItem">
          <button>Add</button>
        </Link>
        <Link to="/ChangeRecordDescription">
          <button>Change list description</button>
        </Link>
        <Link to="/">
          <button>Wipe all data</button>
        </Link>
      </div>
    </div>
  );
}

export default GroceryList;
