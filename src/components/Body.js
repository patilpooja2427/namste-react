import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resObj)
  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = resObj.filter((res) => res.data.stars > 4.5);
            setListOfRestaurants(filterList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((data) => {
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

export default Body;
