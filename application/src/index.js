import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase";
import firestore from "./firebase_setup/firebase";

// firebase.initializeApp({
//   apiKey: "AIzaSyAfXhPybkubPRPXTakRD2RMGpY-JP7s1Yw",
//   authDomain: "hospital-e70e2.firebaseapp.com",
//   projectId: "hospital-e70e2",
//   storageBucket: "hospital-e70e2.appspot.com",
//   messagingSenderId: "397307001569",
//   appId: "1:397307001569:web:4eb34d241bc4fd54a8d5a0",
//   measurementId: "G-Q0XT2ERRJJ",
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
// Create a new context
const GlobalStateContext = React.createContext();

const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = React.useState({});

  // You can define functions to update the global state as needed

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

root.render(
  <GlobalStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalStateProvider>
);
export { GlobalStateContext };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
