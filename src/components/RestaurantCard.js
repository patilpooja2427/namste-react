import { useState } from "react";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { resName, cuisine, stars, delivery_time, constForTwo, image } = resData.data;
  return (
    <div className="res-card" key={resName}>
      <div className="res-logo-container">
        <img
          className="res-logo"
          src={image}
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

export default RestaurantCard;