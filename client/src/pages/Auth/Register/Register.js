import React, { useState, useRef } from "react";
import { Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";

import CustomLoader from "../../../components/CustomLoader";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";
import CustomNotification from "../../../components/CustomNotification/CustomNotification";
import Logo from "../../../assets/img/Logo.svg";
import "../Login/login.css";

import useRegister from "./useRegister";

const Register = () => {
  
  const [, forceUpdate] = useState()
  const validator = useRef(
    new SimpleReactValidator( 
      {
        element: message => {
          return <div className="error" color="error">{message}</div>;
        },
        autoForceUpdate: {forceUpdate: forceUpdate}
      }
    )
  )

  const { state, handleInputChange, handleRegister, isLoading } = useRegister();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = validator.current.allValid();
    if (!formValid) {
      validator.current.showMessages();
      forceUpdate(1);
      return;
    }else{
      handleRegister(e);   
    }
  }

  return(
    <>
      <div className="App">
        <form className="form sign-up">
          <div className="logo-signup">
            <img alt="" src={Logo} />
            <span className="logoText text-white">Register</span>
          </div>
            <div className="search-boxes">
            <div className="search-input">
              <label className="text-white">Name</label>
          <CustomInput
            id="name"
            name="name"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              "type":"text"
            }}
            handleInputChange={handleInputChange}
          />
           </div>
          </div>
          {validator.current.message('name', state.name, 'required')}
           <div className="search-boxes">
            <div className="search-input">
              <label className="text-white"> Email</label>
          <CustomInput
            labelText="Email"
            id="email"
            name="email"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              "type":"text"
            }}
            handleInputChange={handleInputChange}
          />
          </div>
          </div>
          {validator.current.message('email', state.email, 'required|email')}
           <div className="search-boxes">
            <div className="search-input">
              <label className="text-white"> Password</label>
          <CustomInput
            id="password"
            name="password"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              "type":"password"
            }}
            handleInputChange={handleInputChange}
          />
           </div>
          </div>
          {validator.current.message('password', state.password, 'required')}
          {isLoading ? (
            <CustomLoader color="text-primary" />
          ):(
            <Button 
               type="button"
              className="form__custom-button btn-primary"
              onClick={(e) => handleSubmit(e) }
            >
              Submit
            </Button>
          )}
          <br/>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-default">Sign In</Link>
          </p>
        </form>
        <CustomNotification />
      </div>
    </>
  )
}              
export default Register;