import React, { Children } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart, handleClearCart, children}) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    product.quantity = product.quantity || 1;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 7) / 100;
  const grandTotal = tax + total + shipping;
  return (
    <div className="cart-container">
      <div className="cart-inner-container">
        <h4>Order Summery</h4>
        <hr className="horizontal" />
        <div className="cart">
          <div className="">
            <p>Selected Items</p>
            <p>Total Price</p>
            <p>Total Shipping</p>
            <p>Tax</p>
            <p style={{ fontWeight: "bold" }}>Grand Total</p>
          </div>
          <div className="cart-clone">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className="">
            <p> {quantity}</p>
            <p>$ {total.toFixed(2)}</p>
            <p>$ {shipping.toFixed(2)}</p>
            <p>$ {tax.toFixed(2)}</p>
            <p style={{ fontWeight: "bold" }}>$ {grandTotal.toFixed(2)}</p>
          </div>
        </div>
        <button onClick={handleClearCart} className="clear-button">
          <span>Clear Cart</span>
          <FontAwesomeIcon className="icon" icon={faTrashAlt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Cart;
