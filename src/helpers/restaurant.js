import { useState, useEffect } from "react";

import { API_URL } from "../utils/constants";

export const useRestaurant = (resId) => {
  const listOfRestaurants = useRestaurantList();
  return listOfRestaurants === null
    ? []
    : listOfRestaurants.filter((res) => res.info.id === resId);
};

export const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  // This console log will be called first because, useEffect will execute once the full UI is rendered
  //console.log("Components rendered");

  const fetchData = async () => {
    //setListOfRestaurants(Restaurants);
    // Call API here and set List of fetched restaurants to state variable
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurants(
      // This access of data changes, you need to go through the JSON data tree to find right path of data
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants;
};
