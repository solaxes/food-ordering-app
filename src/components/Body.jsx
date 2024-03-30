import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/Restaurants";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export default function Body() {
  // Local State Variable - Super powerful variable
  // React Hook is a normal javascript function which is given to us, it is prebuilt and comes with some super powers

  // State Variable
  let [listOfRestaurants, setListOfRestaurants] = useState([]);

  /**
   * useEffect is an another hook available, this has two parameters
   * First parameter  is call back function and second parameter is dependency array
   *
   * useEffect hook is called once the render cycle  is finished
   *
   */
  useEffect(() => {
    //console.log("useEffect Called");
    fetchData();
  }, []);

  // This console log will be called first because, useEffect will execute once the full UI is rendered
  //console.log("Components rendered");

  const fetchData = async () => {
    //setListOfRestaurants(Restaurants);
    // Call API here and set List of fetched restaurants to state variable
    setListOfRestaurants(Restaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

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
