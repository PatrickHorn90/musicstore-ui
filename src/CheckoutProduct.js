import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="product__container">
      <div className="product__header">
        <div className="product__header__left">
          <p>PRODUCT</p>
        </div>
        <div className="product__header__right">
          <p>QTY.</p>
          <p>PRICE</p>
        </div>
      </div>
      <div className="product__body">
        <div>image</div>
        <div>name</div>
        <div>qty</div>
        <div>price</div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
