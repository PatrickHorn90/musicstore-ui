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
            <div className="guitarsContainer">
              <Guitars
                id="02071990"
                name="Fender Special Edition Telecaster Black Cherry Burst"
                price={2000}
                rating={5}
                img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-b90caf6fac872b85__hmac-5600b4cba0315323ec5ed60cab55d7f522e9bc89/images/guitars/TeleHHFMIBC/ICF20001957/ICF20001957-body-large.jpg.auto.webp"
              />
              <Guitars
                id="02071991"
                name="Ibanez Steve Vai Signature - Onyx Black"
                price={3499}
                rating={4}
                img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-953fba0f96f67f96__hmac-08e25d97e8bc350ff14967392d71307f676f8ee4/images/items/750/PIA3761XB-large.jpg.auto.webp"
              />
              <Guitars
                id="02071992"
                name="Gibson Les Paul Standard - Gold Top"
                price={2499}
                rating={4}
                img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-ea934ac5ae738f6a__hmac-ce702f8f8c4e36836fe705f819f1a5a048c3d196/images/items/750/LPS5PGTNH-large.jpg.auto.webp"
              />
              <Guitars
                id="02071993"
                name="PRS SE Custom 24 - Black Gold Sunburst"
                price={829}
                rating={4}
                img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-fdb262a4aa8d74aa__hmac-255110e32a918fd696757d2e6e86be31cd70fb68/images/guitars/SECU24BGSV/CTIC38879/CTIC38879-body-large.jpg.auto.webp"
              />
              <Guitars
                id="02071994"
                name="Kramer Snake Sabo Baretta Outfit - Green"
                price={2499}
                rating={4}
                img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-77021fe26df20621__hmac-0d8c074cd1dca15a00c0f5b837ff5c6ecb181f2f/images/items/750/KBVDSSNBF-large.jpg.auto.webp"
              />
              <Guitars
                id="02071995"
                name="PRS SE Standard 24 - Translucent Blue"
                price={579}
                rating={4}
                img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-9136940a0bb5e899__hmac-6cd7cc67981ad9655b9284d2003dc61c4ef99e16/images/items/750/SEStd24TBG-large.jpg.auto.webp"
              />
            </div>
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
