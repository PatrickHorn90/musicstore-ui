import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Checkout.css";

function Checkout({ name, price, img }) {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout__page">
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
        <div className="checkout__container">
          <div className="col1">
            <div className="col1__cart">
              <ShoppingCartIcon />
            </div>
            <h2>Shopping Cart</h2>
          </div>
          <CheckoutProduct />
          <h2>Your cart has {basket.length} items in it.</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
