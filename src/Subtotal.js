import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal__container">
      <div className="subtotal__upper">
        <div className="subtotal__headers">
          <h4>SUBTOTAL</h4>
          <h4>ESTIMATED SHIPPING</h4>
        </div>
        <div className="subtotal__amounts">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h3>{` ${value}`}</h3>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <h3 className="red">FREE</h3>
        </div>
      </div>
      <button className="checkoutBtn">CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
