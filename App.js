import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./public/img/logo.png";
import Restaurants from "./data/Restaurants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f4f4f4",
};

const RestaurantCard = (props) => {
  const resData = props.resData.info;
  console.log(resData);
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h5>{resData.avgRating} Stars</h5>
      <h5>{resData.costForTwo}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search"></div>
      <div className="restaurant-container">
        {Restaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
