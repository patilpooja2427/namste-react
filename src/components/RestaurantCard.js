import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  
  const { resData } = props;
  return (
    <div className="res-card" key={resData.name}>
      <div className="res-logo-container">
        <img className="res-logo" src={CDN_URL + resData.cloudinaryImageId}></img>
      </div>
      <h3>{resData.name}</h3>
      <h5>{[...resData.cuisines].join(', ')}</h5>
      <h5>{resData.avgRatingString} Stars</h5>
      <h5>Time: {resData.sla.deliveryTime}</h5>
      <h5>Cost: {resData.costForTwo} Stars</h5>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="promoted">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
