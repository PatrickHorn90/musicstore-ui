import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar__container">
      <Link className="navBar__link">
        <h4>Shop By Category</h4>
      </Link>
      <Link className="navBar__link">
        <h4>What's New</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Deals</h4>
      </Link>
      <Link className="navBar__link">
        {" "}
        <h4>News and Research</h4>
      </Link>
      <Link className="navBar__link">
        {" "}
        <h4>Support</h4>
      </Link>
      <Link className="navBar__link">
        {" "}
        <h4>Giveaway</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Sweetwater Card</h4>
      </Link>
    </div>
  );
}

export default NavBar;
