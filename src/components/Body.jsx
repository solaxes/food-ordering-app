import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/Restaurants";

export default function Body() {
  // Local State Variable - Super powerful variable
  // React Hook is a normal javascript function which is given to us, it is prebuilt and comes with some super powers

  // State Variable
  let [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const newList = Restaurants.filter(
              (res) => res.info.avgRating > 4.3
            );

            setListOfRestaurants(newList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(Restaurants);
          }}
        >
          Reset List
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
