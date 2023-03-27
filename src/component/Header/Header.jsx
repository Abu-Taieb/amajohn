import React from "react";
import "../Header/Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="headerNav">
        <a href="shop">Shop</a>
        <a href="order">Order</a>
        <a href="inventory">Inventory</a>
        <a href="login">Log In</a>
      </div>
    </div>
  );
};

export default Header;
