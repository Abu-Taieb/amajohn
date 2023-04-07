import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import './Orders.css';
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handleRemoveCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([]);
  }

  return (
    <div className="shop-container">
      <div className="cart-container">
        {
          cart.map(product => 
          <ReviewItem
            key = {product.id}
            product = {product}
            handleRemoveCart = {handleRemoveCart}
          ></ReviewItem>)
        }
      </div>
      <div id="order-cart" className="cart">
        <Cart 
        cart ={cart}
        handleClearCart = {handleClearCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Orders;
