import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://media.sweetwater.com/api/i/f-webp__w-380__q-58__ha-1bfd4518cf2cb3fc__hmac-e81b8fa3619f10dff86b35fbec683fe5c6584771/header/logo/sweetwater-logo.png.auto.webp"
          alt="logo"
        />
      </Link>
      <form className="header__searchBar">
        <SearchIcon className="header__searchIcon" />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for sweet gear"
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
        We're here to help
      </div>
      <Link to="/login" className="header__links">
        <h4>Account</h4>
      </Link>
      <Link to="/checkout" className="header__shoppingCartLink">
        <ShoppingCartIcon fontSize="large" />
        {basket?.length}
      </Link>
    </nav>
  );
}

export default Header;
