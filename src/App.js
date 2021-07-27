import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Guitars from "./Guitars";
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./Login";
import NavBar from "./NavBar";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  console.log("USER IS >> ", user);
  return (
    <Router>
      <div className="app">
        <div>
          <Header />
        </div>
        <div>
          <NavBar />
        </div>

        <Switch>
          <Route path="/sweetwatercard">
            <h1>Sweetwater Card Page</h1>
          </Route>
          <Route path="/giveaway">
            <h1>Giveaway Page </h1>
          </Route>
          <Route path="/support">
            <h1>Support Page</h1>
          </Route>
          <Route path="/newsandresearch">
            <h1>News and Reasearch Page</h1>
          </Route>
          <Route path="/deals">
            <h1>Deals Page</h1>
          </Route>
          <Route path="/whatsnew">
            <h1>What's new page</h1>
          </Route>
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
