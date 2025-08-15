import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resObj from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurantsList, setFilterRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
    );
    const json = await data.json();
    const res =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(res);
    setFilterRestaurantsList(res);
  };

  //conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-search"
            onClick={() => {
              const filterResList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurantsList(filterResList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => Number(res.info.avgRatingString) > 4.5
            );
            setFilterRestaurantsList(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurantsList.map((data, index) => {
          return (
            <Link key={data.info.id} to={"/restaurant/" + index}>
              <RestaurantCard resData={data.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
