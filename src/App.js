import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./Components/Preloader/Preloader";
import Timer from "./Components/Countdown/Timer";
import Optin from "./Components/Optin/Optin";
import "./App.css";
import logo from "./logo-01.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 color="white">Website Coming Soon</h1>
        <img src={logo} className="logo"/>

        <Preloader />
      </div>
    </div>
  );
}
