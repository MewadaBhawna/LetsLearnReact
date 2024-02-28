import React from "react";
import BodyBg from "../../images/flat-lay.jpg";
import RestuarantCard from "../body/RestuarantCard";
import ResData from "../../utils/mockdata";

const Body = () => {
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
        <span style={{ "font-size": "24px" }}>All restaurants</span>
        <ul className="vendor-list-revamp">
          {ResData.map((item) => {
            return (
              <li className="vendor-list-li" key={item.title}>
                <RestuarantCard resDetails={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Body;
