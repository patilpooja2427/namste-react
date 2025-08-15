import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch("http://localhost:3001/restaurant");
    console.log(data);
    const res = await data.json();
    res.length != 0 ? setResInfo(res[resId]) : setResInfo([]);
  };

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>{[...resInfo?.menu].join(", ")}</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
