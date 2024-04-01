import React, { useState } from "react";
import Logo from "../public/img/logo.png";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../helpers/common";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus();

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
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
