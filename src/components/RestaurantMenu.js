import { useEffect, useState } from "react";
import { getRestaurant, getRestaurantList } from "./common/restaurant";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  let [resInfo, setResInfo] = useState(null);
  let [resList, setResList] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurant(resId);
  }, [resId]);

  const fetchRestaurant = (resId) => {
    const data = getRestaurant(resId);
    const allRestaurants = getRestaurantList();
    setResInfo(data);
    setResList(allRestaurants);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="res-menu">
      <h1>{resInfo[0]?.info?.name}</h1>
      <h3>{resInfo[0]?.info?.cuisines.join(", ")}</h3>
      <ul>
        {resList === null ? (
          <Shimmer />
        ) : (
          resList.map((rList) => (
            <li key={rList.id}>
              <Link to={"/restaurants/" + rList.id}>{rList.name}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
