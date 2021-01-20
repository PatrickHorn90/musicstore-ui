import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
            <h1>Create Account</h1>
          </Route>
          <Route path="/">
            <Header />
            <NavBar />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
