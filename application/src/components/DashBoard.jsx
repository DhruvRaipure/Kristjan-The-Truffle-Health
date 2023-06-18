import React, { useContext } from "react";
import MedicalForm from "./MedicalForm";
import ShowBills from "./ShowBills";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { GlobalStateContext } from "../index";
import "./dashboard.css";

const DashBoard = (props) => {
  const { globalState, setGlobalState } = React.useContext(GlobalStateContext);
  const value = globalState;
  const [Authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log(value.userInfo.uid);
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setAuthenticated(true);
      setLoading(false);
    }
  });

  const handleLogOut = () => {
    setAuthenticated(false);
    localStorage.setItem("authenticated", false);
  };

  return loading ? (
    <div>loadingg</div>
  ) : Authenticated ? (
    <div>
      <div className="navbar">
        <h1 className="mainHeading">Welcome </h1>
        <button className="logOutBtn" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      <div className="buttonContainer">
        <button className="checkPrevBtn" onClick={() => setToggle(false)}>
          Check Previous Forms
        </button>
        <button className="inputNewFormBtn" onClick={() => setToggle(true)}>
          Enter New Form
        </button>
      </div>
      {toggle ? <MedicalForm /> : <ShowBills uid={value.userInfo.uid} />}
    </div>
  ) : (
    <Navigate replace to="/" />
  );
};

export default DashBoard;
