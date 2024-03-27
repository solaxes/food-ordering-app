import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/Restaurants";

export default function Body() {
  const listOfRestaurants = [];

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Write filter logic here
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
}
