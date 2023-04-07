import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h2>Log in</h2>
      <div className="loginDetails">
        <input type="email" name="email" id="" placeholder="Enter your email" />
        <input type="password" name="password" id="" placeholder="Enter your password" />
      </div>
      <button type="submit">Submit</button>
      <p><span><a href="">Sign up</a></span> or <span>already have an <a href="">account</a></span></p>
    </div>
  );
};

export default Login;
