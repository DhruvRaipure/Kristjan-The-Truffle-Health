import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_setup/firebase";
import { Outlet, Link } from "react-router-dom";
import "./signUp.css";

const SignUp = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <form onSubmit={signUp} className="formContainer">
          <h1 className="heading">Sign Up</h1>
          <input
            className="inputField"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            className="inputField"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" className="submitBtn">
            Sign Up
          </button>
          <h3 className="secondaryHeading">
            Already a user?
            <nav>
              <ul>
                <li>
                  <Link to="/">Sign In</Link>
                </li>
              </ul>
            </nav>
          </h3>
        </form>
      </div>
    </>
  );
};

export default SignUp;
