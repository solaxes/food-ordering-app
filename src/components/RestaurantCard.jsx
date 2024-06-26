import React from "react";
import { MEDIA_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const resData = props.resData.info;
  const styleCard = {
    backgroundColor: "#f4f4f4",
  };

  return (
    <div className="restaurant-card" style={styleCard}>
      <Link to={"/restaurants/" + resData.id}>
        <img
          className="card-image"
          src={MEDIA_CDN_URL + resData.cloudinaryImageId}
        />
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h5>{resData.avgRating} Stars</h5>
        <h5>{resData.costForTwo}</h5>
      </Link>
    </div>
  );
};

export default RestaurantCard;
