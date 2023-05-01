import React, { useContext } from "react";
import "../Header/Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="headerNav">
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        {user && <span>Welcome {user.email}</span> }
      </div>
    </div>
  );
};

export default Header;
