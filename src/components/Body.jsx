import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Restaurants from "../data/Restaurants";
import Shimmer from "./Shimmer";
import { useRestaurantList } from "../helpers/restaurant";

export default function Body() {
  const [searchText, setSearchText] = useState("");

  const resList = useRestaurantList();

  if (resList === null) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const listOfFilteredRestaurants = Restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurants(listOfFilteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
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
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
}
