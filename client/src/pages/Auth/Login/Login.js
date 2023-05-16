import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import CustomLoader from "../../../components/CustomLoader";
import CustomInput from "../../../components/CustomInput/CustomInput.js";
import Button from "../../../components/CustomButtons/Button.js";
import CustomNotification from "../../../components/CustomNotification/CustomNotification";
import "./login.css";

import useLogin from "./useLogin";
import Logo from "../../../assets/img/Logo.svg";

const Login = () => {
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      element: (message) => {
        return (
          <div className="error" color="error">
            {message}
          </div>
        );
      },
      autoForceUpdate: { forceUpdate: forceUpdate },
    })
  );

  const { state, handleInputChange, handleLogin, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    if (!formValid) {
      validator.current.showMessages();
      forceUpdate(1);
      return;
    } else {
      handleLogin(e);
    }
  };

  //const classes = useStyles();
  return (
    <>
      <div className="App">
        <form className="form sign-up">
          <div className="logo-signup">
            <img alt="" src={Logo} />
            <span className="logoText text-white">Login</span>
          </div>
          <div className="search-boxes">
            <div className="search-input">
              <label className="text-white"> Email</label>

              <CustomInput
                id="email"
                name="email"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Email",
                  type: "text",
                }}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          {validator.current.message("email", state.email, "required|email")}
          <div className="search-boxes">
            <div className="search-input">
              <label className="text-white"> Password</label>
              <CustomInput
                id="password"
                name="password"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  placeholder: "Password",
                  type: "password",
                }}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          {validator.current.message("password", state.password, "required")}
          {isLoading ? (
            <CustomLoader color="text-primary" />
          ) : (
            <Button
              type="button"
              className="form__custom-button btn-primary"
              onClick={(e) => handleSubmit(e)}
            >
              Log in
            </Button>
          )}
          <br />
          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-default">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <CustomNotification />
    </>
  );
};

export default Login;
