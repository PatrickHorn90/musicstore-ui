import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Guitars from "./Guitars";
import Header from "./Header";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <NavBar />
        <Switch>
          <Route path="/guitars">
            <Guitars />
          </Route>
          <Route path="/contact">
            <h1>Contact Page</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
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
