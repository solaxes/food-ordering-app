import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useRestaurant, useRestaurantList } from "../helpers/restaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurant(resId);

  const resList = useRestaurantList();

  console.log(resList);

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
            <li key={rList?.info?.id}>
              <Link to={"/restaurants/" + rList?.info?.id}>
                {rList?.info?.name} - {rList?.info?.costForTwo}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
