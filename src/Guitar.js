import React from "react";
import { useStateValue } from "./StateProvider";
import "./Guitar.css";

const Guitar = ({
  guitar: { id, brand, name, description, price, rating, img },
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        brand: brand,
        name: name,
        description: description,
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
        <p className="guitar__description">{description}</p>
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
};

export default Guitar;
