import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar__container">
      {/* <Link className="navBar__link">
        <h4>Shop By Category</h4>
      </Link> */}
      <FormControl>
        <InputLabel id="dropdownLabel">
          <h4>Shop by Category</h4>
        </InputLabel>
        <Select>
          <Link to="/guitars" className="dropdownCategory">
            <MenuItem>Guitars</MenuItem>
          </Link>
          <Link className="dropdownCategory">
            <MenuItem>Bass</MenuItem>
          </Link>
          <Link className="dropdownCategory">
            <MenuItem>Drums</MenuItem>
          </Link>
          <Link className="dropdownCategory">
            <MenuItem>Keyboards</MenuItem>
          </Link>
        </Select>
      </FormControl>
      <Link className="navBar__link">
        <h4>What's New</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Deals</h4>
      </Link>
      <Link className="navBar__link">
        <h4>News and Research</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Support</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Giveaway</h4>
      </Link>
      <Link className="navBar__link">
        <h4>Sweetwater Card</h4>
      </Link>
    </div>
  );
}

export default NavBar;
