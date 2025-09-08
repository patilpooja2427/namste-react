import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CategoryItems = (props) => {
  const { item } = props;
  const dispatch = useDispatch()
  const handleAddItem = (menu) => {
    //dispatch action
    dispatch(addItem(menu))
  }
  return (
    <div className="panel">
      {item.map((card, index) => {
        return (
          <div key={index}>
            {card.name}

            {card.menu.map((menu, index) => {
              return (
                <div key={index} >
                  <div className="cardMenu">
                    {menu}
                    <button onClick={() => handleAddItem(menu)}>Add</button>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default CategoryItems;
