import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    id: 1,
    type: "res",
    data: {
      resName: "KFC",
      cuisine: "Fast Food",
      stars: "4.5",
      delivery_time: "30 mins",
      constForTwo: "440",
    },
  },
  {
    id: 2,
    type: "res",
    data: {
      resName: "MAC-D",
      cuisine: "Fast Food",
      stars: "4.2",
      delivery_time: "40 mins",
      constForTwo: "600",
    },
  },
  {
    id: 3,
    type: "res",
    data: {
      resName: "AFC",
      cuisine: "Fast Food",
      stars: "4.8",
      delivery_time: "30 mins",
      constForTwo: "440",
    },
  },
  {
    id: 4,
    type: "res",
    data: {
      resName: "KFC",
      cuisine: "Fast Food",
      stars: "4.5",
      delivery_time: "30 mins",
      constForTwo: "440",
    },
  },
];
const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, stars, delivery_time, constForTwo } = resData.data;
  return (
    <div className="res-card" key={resName}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
        ></img>
      </div>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars} Stars</h4>
      <h3>Time: {delivery_time}</h3>
      <h3>Cost: {constForTwo / 2} Stars</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resObj.map((data) => {
          return <RestaurantCard resData={data} key={data.id} />;
        })}
        {/* <RestaurantCard resData={resObj[0]} />
        <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} />
        <RestaurantCard resData={resObj[3]} /> */}
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
