import React from "react";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, name, price, img, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct__container">
      <div className="checkoutProduct__header">
        <p>PRODUCT</p>
        <p>NAME</p>
        <p>QTY</p>
        <p>PRICE</p>
      </div>
      <div className="checkoutProduct__body">
        <img src={img} alt="checkoutProduct__img" />
        <div className="checkoutProduct__info">
          <h3>{name}</h3>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
        <div className="checkoutProduct__qty">
          <input type="number" min="1" value="1" />
          <button onClick={removeFromCart}>Remove</button>
        </div>
        <div>{price}</div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
