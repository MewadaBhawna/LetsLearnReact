import React from "react";
import ReactDOM from "react-dom/client";
import CompanyLogo from "./src/images/appLogo.jpeg";
import BodyBg from "./src/images/flat-lay.jpg";
import Star from "./src/images/star.svg";
import Time from "./src/images/time.svg";
import Delivery from "./src/images/delivery.svg";
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
const RestuarantCard = () => {
  return (
    <div className="res-card">
      <img
        className="vendor-image-tile vendor-list-li"
        alt="restuarant image"
        src={CompanyLogo}
      />
      <div className="vendor-tile-info">
        <div className="res-name-rate">
          <div>restuarant name</div>
          <div>
            <img className="rating" alt="rating" src={Star} />
            <span style={{ color: "#ff7e73" }}>1</span>
          </div>
        </div>
        <div>CUISINE</div>
        <div className="time-tile">
          <div>
            <img style={{ "margin-right": "5px" }} alt="time" src={Time} />
            60min
          </div>
          <div>
            <img style={{ margin: " 0px 5px" }} alt="delivery" src={Delivery} />
            Free
          </div>
        </div>
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

      <div style={{ padding: " 15px" }} className="eczar-SemiBold">
        <span style={{ "font-size": "xx-large" }}>All restaurants</span>
        <ul className="vendor-list-revamp">
          <li className="vendor-list-li">
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
          <li>
            <RestuarantCard />
          </li>
        </ul>
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
