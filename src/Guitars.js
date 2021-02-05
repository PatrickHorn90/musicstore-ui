import React from "react";
import "./Guitars.css";

function Guitars({ id, name, price, rating, img }) {
  return (
    <div className="guitarContainer">
      <img src={img} alt="guitarImage" />
      <div className="guitar__info">
        <h3>{name}</h3>
        <p className="guitar__price">
          <small>$</small>
          {price}
        </p>
        <div className="guitar__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <button className="addToCartBtn">ADD TO CART</button>
    </div>
  );
}

export default Guitars;
