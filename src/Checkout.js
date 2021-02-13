import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__container">
      {basket.length === 0 ? (
        <div className="emptyCartBackground">
          <img
            src="https://media.sweetwater.com/cart/case.png"
            alt="guitar case"
            className="emptyGuitarCase"
          />
          <div className="emptyCartFeedback">
            <h2>Your Cart is Empty!</h2>
            <h4>Need some ideas? Go to Guitars!</h4>
          </div>
        </div>
      ) : (
        <h2>Your cart has {basket.length} items in it.</h2>
      )}
    </div>
  );
}

export default Checkout;
