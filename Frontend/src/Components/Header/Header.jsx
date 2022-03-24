import React from "react";
import logo from "../../static/Images/logo.svg";

import Navigation from "./Navigation/Navigation";

const Header = (props) => {
  return (
    <div className="Header Container">
      <img className="logo" src={logo} alt="" />
      <div className="nav-bar">
        <Navigation login={props.login} />
      </div>
    </div>
  );
};

export default Header;
