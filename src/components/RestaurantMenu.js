import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resInfo = useRestaurantMenu(resId);
  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo?.name}</h1>
      <h3>delivery_time: {resInfo?.delivery_time}</h3>
      <h3>Rating: {resInfo?.stars}</h3>

      <h2>Menus</h2>
      {resInfo.cards.map((card, index) => {
        return (
          <RestaurantCategory
            category={card}
            key={index}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
