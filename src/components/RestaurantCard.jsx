import React from "react";
import { MEDIA_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const resData = props.resData.info;
  const styleCard = {
    backgroundColor: "#f4f4f4",
  };

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="card-image"
        src={MEDIA_CDN_URL + resData.cloudinaryImageId}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h5>{resData.avgRating} Stars</h5>
      <h5>{resData.costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
