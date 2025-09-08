import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveCart = () => {
    dispatch(removeItem());
  }
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 && (
        <div> No data found... Add Items in cart. </div>
      )}
      <button onClick={handleClearCart}>Clear Cart</button>
      {cartItems.map((item, index) => {
        return (
          <div key={index} className="cardMenu">
            {item}
            <button  onClick={handleRemoveCart}>- Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
