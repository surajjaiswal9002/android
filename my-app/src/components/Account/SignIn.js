import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Button from "@momentum-ui/react/lib/Button";


function SignIn() {

  return (
    
    <div className="form-signin">
     

      <h2 className="h3 mb-3 font-weight-normal">Please sign in</h2>
     
      <h3>Email</h3>
      <label for="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        className="form-control"
        placeholder="Email address"
        required
        autofocus
      />
      <h3>password</h3>
      <label for="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        className="form-control"
        placeholder="Password"
        required
      />
      <div className="checkbox mb-3">
      <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      
      </div>
      <Button children="sign-in"  color="blue" />
     <Link to="SignUp"> <Button children="sign-up"  color="blue" /></Link>
    </div>
  );
}

export default SignIn;
