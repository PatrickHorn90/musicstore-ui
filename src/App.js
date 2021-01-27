import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

function App() {
  const [{ basket }] = useStateValue();
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
          <Route path="/checkout">
            <h1>You have {basket.length} items in your basket</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            <h1>Create Account</h1>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
