import React from "react";
import { Link } from "react-router-dom";
import "./valueAds.css";

function ValueAds() {
  return (
    <div className="valueAds">
      <h2>Get More at Sweetwater</h2>
      <div className="valueAds__links">
        <Link className="valueAds__link">Dedicated Sales Engineer</Link>
        <Link className="valueAds__link">55-point Guitar Inspection</Link>
        <Link className="valueAds__link">Fast, FREE Shipping</Link>
        <Link className="valueAds__link">FREE Tech Support</Link>
        <Link className="valueAds__link">FREE 2-Year Warranty</Link>
        <Link className="valueAds__link">Easy Payments</Link>
      </div>
    </div>
  );
}

export default ValueAds;
