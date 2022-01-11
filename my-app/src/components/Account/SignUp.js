import Button from "@momentum-ui/react/lib/Button";
import React, { useState } from "react";
import "./SignUp.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useStateValue } from "../StateProvider/StateProvider";

function SignUp() {
  const [value, setValue] = useState();
  return (
    <div className="form-signin">
     

      <h2 className="h3 mb-3 font-weight-normal">Create a new account</h2>
      <h3>Name</h3>
      <label for="inputName" className="sr-only">
        name
      </label>
      <input
        type="name"
        id="inputName"
        className="form-control"
        placeholder="name"
        required
        autofocus
      />

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
      <h3>Mobile-No</h3>
      {/* <label for="inputMobile" className="sr-only">
        Eg : 081 222 2224
      </label>
      <input
        type="mobile"
        id="inputMobile"
        pattern="[0-9]{10}"
        className="form-control"
        placeholder="Eg : 081 222 2224"
        title="Ten digits code"
        required
        autofocus
      /> */}

      <PhoneInput
        international
        countryCallingCodeEditable={true}
        defaultCountry="IN"
        value={value}
        onChange={setValue}
        />

<label for="phone">Enter your phone number:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
    

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <Button children="sign-up" color="blue" />
    </div>
  );
}

export default SignUp;
