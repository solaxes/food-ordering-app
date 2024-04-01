import React, { useState } from "react";
import Logo from "../public/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");

  const changeLogin = () => {
    if (btnText == "Login") {
      setBtnText("Logout");
    } else {
      setBtnText("Login");
    }
  };

  console.log("Hello");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="loginBtn" onClick={changeLogin}>
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
