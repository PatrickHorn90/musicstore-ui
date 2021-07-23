import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./images/sourwater.png";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <form className="header__searchBar">
        <SearchIcon className="header__searchIcon" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Click on Guitars under Product Categories..."
        />
      </form>
      <div>
        <h3 className="phoneNumber">(800) 222-4700</h3>
        Talk to an expert!
      </div>
      <div>
        <Link to="/contact" className="header__links">
          <h4>Contact Us</h4>
        </Link>
        <p> We're here to help</p>
      </div>
      <Link to={!user && "/login"} className="header__links">
        {user && `Hi ${user?.email}`}
        <h4 onClick={login}>{user ? "LogOut" : "Login"}</h4>
      </Link>
      <Link to="/checkout" className="header__shoppingCartLink">
        <ShoppingCartIcon fontSize="large" />
        {basket?.length}
      </Link>
    </nav>
  );
}

export default Header;
