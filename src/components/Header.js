import React, { useState } from "react";
import Logo from "../public/img/logo.png";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
