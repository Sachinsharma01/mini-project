import React from "react";
import Card from "../components/UI/Card";
import classes from "./Login.module.css";
import image from "../assets/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const Login = () => {
  return (
    <div className={classes.main}>
      <div>
        <img src={image} alt="login" />
      </div>
      <Card>
        <h1>Create Account</h1>
        <h4>
          Already have an account? <a href="www.beta-labs.in">Sign in</a>
        </h4>
        <div className={classes.name}>
          <input type="text" placeholder="First name"></input>
          <input type="text" placeholder="Last name"></input>
        </div>
        <input
          type="text"
          className={classes.username}
          placeholder="Username"
        ></input>
        <input type="email" placeholder="Enter e-mail"></input>
        <input type="password" placeholder="Enter password"></input>
        <button>Sign Up</button>
        <div className={classes.social}>
          <button>
            <FcGoogle />
          </button>
          <button>
            <FaFacebookSquare />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
