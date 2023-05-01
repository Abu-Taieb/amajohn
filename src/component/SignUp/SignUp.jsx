import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

  const [error, setError] = useState('');
  const{createUser} = useContext(AuthContext);

  const handleSignUp = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError('');
    if(password !== confirm){
      setError('Your password did not match');
      return
    }else if(password.length < 6){
      setError('Your password must be 6 characters or longer');
      return
    }
    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error => {
      console.log(error);
      setError(error.message);
    })
  }


  return (
    <div>
      <form onSubmit={handleSignUp} className="login">
        <h2>Sign Up</h2>
        <div className="loginDetails">
          <input
            type="name"
            name="name"
            id=""
            required
            placeholder="Enter your name"
          />
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
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit">Resister</button>
        <p>
          <span>
            Already have an Account? <Link to="/login">Log in</Link>
          </span>
        </p>
        <p className="text-error">{error}</p>
        <button type="submit">Continue with Google</button>
      </form>
    </div>
  );
};

export default SignUp;
