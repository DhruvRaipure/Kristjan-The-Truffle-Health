import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_setup/firebase";
import { Outlet, Link } from "react-router-dom";
import DashBoard from "../DashBoard";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { GlobalStateContext } from "../../index";
import "./signIn.css";

const SignIn = () => {
  const { globalState, setGlobalState } = React.useContext(GlobalStateContext);
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [user, setUser] = useState();
  const updateState = (newValue) => {
    setGlobalState((prevState) => ({
      ...prevState,
      userInfo: newValue,
    }));
  };
  // console.log(authenticated);
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        setUser(userCredential.user.uid);
        updateState(userCredential.user);

        setauthenticated(true);
        localStorage.setItem("authenticated", true);

        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <form onSubmit={signIn} className="formContainer">
          <h1 className="heading">Log In</h1>
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
            Log In
          </button>
          <h3 className="secondaryHeading">
            New User?
            <nav>
              <ul>
                <li>
                  <Link to="/signUp">Sign Up</Link>
                </li>
              </ul>
            </nav>
          </h3>
        </form>
      </div>
    </>
  );
};

export default SignIn;
