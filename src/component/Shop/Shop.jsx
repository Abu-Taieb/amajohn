import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storeCart = getShoppingCart();
    const savedCart = [];
    // get id
    for (const id in storeCart) {
      // get the product by using id
      const addedProduct = products.find((product) => product.id === id);

      // get quantity of the product
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    // set the cart
    setCart(savedCart);
  }, [products]);

  const addToCart = (showData) => {
    const newCart = [...cart, showData];
    setCart(newCart);
    addToDb(showData.id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders">
            <button className="proceed-checkout">
              <span>Order Review</span>
              <FontAwesomeIcon className="icon" icon={faCaretRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
