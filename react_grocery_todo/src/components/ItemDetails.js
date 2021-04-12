import React from "react";
import { useParams, Link } from "react-router-dom";

function ItemDetails() {
  let { id } = useParams();

  return (
    <div className="ui fluid card">
      <div className="content">
        <p>
          <b>
            Editing Item <em>{id}</em>
          </b>
        </p>
        <hr />
        <p>
          <label>Name*</label>
          <input />
        </p>
        <p>
          <label>Details</label>
          <input />
        </p>
        <p>
          <label>Quantity</label>
          <input type="number" />
        </p>
        <p>
          <label>Weight</label>
          <input type="number" />
        </p>
        <p>
          <label>Unit</label>
          <select>
            <option selected value="none">
              -
            </option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
          </select>
        </p>
        <hr />
        <em>* - required field</em>
        <div>
        <Link to="/GroceryList">
              <button>Apply changes</button>
            </Link>
        </div>
        <p>
          <em>@errorMessage</em>
        </p>
      </div>
    </div>
  );
}

export default ItemDetails;
