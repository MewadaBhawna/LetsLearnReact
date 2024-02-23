import React from "react";
import CompanyLogo from "../../images/appLogo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="appLogo" src={CompanyLogo} alt="appLogo" />
      </div>
      <div>
        <ul className="navItems eczar-SemiBold">
          <li className="listItems">Home</li>
          <li className="listItems">About Us </li>
          <li className="listItems">Contact Us </li>
          <li className="listItems">Cart </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
