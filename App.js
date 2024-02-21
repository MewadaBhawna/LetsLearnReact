import React from "react";
import ReactDOM from "react-dom/client";
import CompanyLogo from "./src/images/appLogo.jpeg";
import BodyBg from "./src/images/flat-lay.jpg";
import SearchIcon from "./src/images/search.svg";
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
const BodyComponent = () => {
  return (
    <div className="bodyContainer">
      <img className="bgImage" src={BodyBg} />
      <div className="centered">
        <input
          className="searchBar"
          type="search"
          placeholder="Search for restaurants and food"
        />

        <div className="eczar-normal">The best food of your choice</div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
