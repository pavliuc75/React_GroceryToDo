import React from "react";
import SwitchList from "./SwitchList";
import GroceryList from "./GroceryList";
import AddItem from "./AddItem";
import ItemDetails from "./ItemDetails";
import ChangeRecordDescription from "./ChangeRecordDescription";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App ui container">
        <Switch>
          <Route exact path="/" component={SwitchList}></Route>
          <Route path="/GroceryList" component={GroceryList}></Route>
          <Route path="/AddItem" component={AddItem}></Route>
          <Route path="/ItemDetails/:id" component={ItemDetails}></Route>
          <Route
            path="/ChangeRecordDescription"
            component={ChangeRecordDescription}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
