import { CDN_URL } from "../utils/constants";

// Normal Method :-

/* const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgs.search.brave.com/hPPz5OiBp-RpsIsQGx1DP0qt5W9qygudBHmGwe3lceQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbWN5/ZWxsb3dwYWdlcy5j/b20vZGlyZ2FsbGVy/eWltZy90aHVtYm5h/aWwvc3IyXzU3MTEu/anBn"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
}; */

// Destructing on the fly:-

//1st type

// const RestaurantCard = (props) => {
//   const { resName, cuisine } = props;

// Here I am using just an example of KFC

// const RestaurantCard = (props) => {
//   const { resData } = props;

// For Best Practices:-

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
    sla,
  // } = resData? .data for tutorial
  } = resData?.info


  //This is the normal card

  /* return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgs.search.brave.com/hPPz5OiBp-RpsIsQGx1DP0qt5W9qygudBHmGwe3lceQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbWN5/ZWxsb3dwYWdlcy5j/b20vZGlyZ2FsbGVy/eWltZy90aHVtYm5h/aWwvc3IyXzU3MTEu/anBn"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  ); */

  // Example of a KFC

  /* return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.data.cloudinaryImageId
        }
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>4.5 stars</h4>
      {/* <h4>{resData.data.costForTwo / 100}</h4> }
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  ); */

  //Best Practices

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {avgRating} stars</h4>
      {/* <h4>{resData.data.costForTwo / 100}</h4> According to the old API tutorial */}
      {/* <h4>₹{costForTwo / 100} FOR TWO</h4> According to the old API tutorial */} 
      { <h4>{costForTwo}</h4> } 
      {/* <h4>{deliveryTime} minutes</h4> */}
      <h4>{sla?.slaString}</h4>
    </div>
  );
};


export default RestaurantCard;