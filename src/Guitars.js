import React from "react";
import { useStateValue } from "./StateProvider";
import "./Guitars.css";

function Guitars({ id, name, price, rating, img }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        price: price,
        rating: rating,
        img: img,
      },
    });
  };

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
      <button onClick={addToCart} className="addToCartBtn">
        ADD TO CART
      </button>
    </div>
  );
}

export default Guitars;
