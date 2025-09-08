import CategoryItems from "./CategoryItem";
import { useState } from "react";
const RestaurantCategory = (props) => {
 const accordionState = props.showItems;
 const setShowIndex = props.setShowIndex;
  const { title, type, itemCards } = props.category.card;
//   const [accordionState, setAccordionState] = useState(false);
  const handleClick = () => {
    // setAccordionState(!accordionState);
    setShowIndex();
  };
  return (
    <div className="category-container">
      <button className="accordion" onClick={handleClick}>
        {title}
      </button>

      {accordionState == true && <CategoryItems item={itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
