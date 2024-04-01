/**
 * This file is not in use now, can be deleted anytime
 */

import Restaurants from "../../data/Restaurants";
export const getRestaurant = (resId) => {
  // Best way to make an API call from here
  return Restaurants.filter((res) => res.info.id === resId);
};

export const getRestaurantList = () => {
  return Restaurants.map((res) => ({
    id: res.info.id,
    name: res.info.name,
    costForTwo: res.info.costForTwo,
  }));
};
