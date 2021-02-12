import React from "react";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <h1>CHECKOUT</h1>
    </div>
  );
}

export default Checkout;
