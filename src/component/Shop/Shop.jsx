import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (showData) => {
    const newCart = [...cart, showData];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product 
          key={product.id}
          product={product}
          addToCart = {addToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <h3>Selected Items : {cart.length}</h3>
      </div>
    </div>
  );
};

export default Shop;
