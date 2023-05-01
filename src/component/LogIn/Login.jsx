import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="login">
      <h2>Log in</h2>
      <div className="loginDetails">
        <input
          type="email"
          name="email"
          id=""
          required
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          id=""
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit">Log In</button>
      <p>
        <span>
          New to Ema-John? <Link to="/signup">Sign Up</Link>
        </span>
      </p>
      <button type="submit">Continue with Google</button>
    </form>
  );
};

export default Login;
