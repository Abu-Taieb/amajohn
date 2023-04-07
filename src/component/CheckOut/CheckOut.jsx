import React from "react";
import "./CheckOut.css";

const CheckOut = () => {
  return (
    <>
      <div className="checkOut-container">
        <h3>Check Out Page</h3>
        <div className="checkOut-details">
          <div className="checkOut-left">
            <h4>Your Bank Account Details</h4>
            <input type="text" className="" placeholder="Enter your bank information" />
          </div>
          <div className="checkOut-right">
            <h4>Credit Card Details</h4>
            <input type="number" className="" placeholder="Enter your card information" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
