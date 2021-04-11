import React from "react";
import SwitchList from "./SwitchList";
import GroceryList from "./GroceryList";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App ui container">
        <Switch>
          <Route exact path="/" component={SwitchList}></Route>
          <Route path="/GroceryList" component={GroceryList}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
