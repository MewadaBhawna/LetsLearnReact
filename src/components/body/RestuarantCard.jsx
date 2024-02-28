import React from "react";
import Star from "../../images/star.svg";
import Time from "../../images/time.svg";
import Delivery from "../../images/delivery.svg";

const RestuarantCard = (props) => {
  const { resDetails } = props;
  return (
    <div className="res-card">
      <img
        className="vendor-image-tile vendor-list-li"
        alt="restuarant image"
        src={resDetails.image.url}
      />
      <div className="vendor-tile-info">
        <div className="res-name-rate text-style-card">
          <div className="text-font">{resDetails.title}</div>
          <div>
            <img className="rating" alt="rating" src={Star} />
            <span style={{ color: "#ff7e73" }}>
              {resDetails.venue.rating.score}
            </span>
          </div>
        </div>
        <div className="text-style-card">
          {resDetails.venue.short_description}
        </div>
        <div className="time-tile text-style-card ">
          <div>
            <img style={{ "margin-right": "5px" }} alt="time" src={Time} />
            {resDetails.venue.estimate_box.title}{" "}
            {resDetails.venue.estimate_box.subtitle}
          </div>
          <div>
            <img style={{ margin: " 0px 5px" }} alt="delivery" src={Delivery} />
            {resDetails.venue.delivery_price_int} {resDetails.venue.currency}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestuarantCard;
