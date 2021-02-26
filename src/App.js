import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Guitars from "./Guitars";
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ basket }] = useStateValue();
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
            <Login />
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
