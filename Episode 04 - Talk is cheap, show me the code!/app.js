import React from "react";
import ReactDOM from "react-dom/client";
// Components my app can have !!
/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://imgs.search.brave.com/e8Y3wq81MufnWDEqhsp3ywx3wrarM2yz9tjmbEO2Z-g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby1uZXcv/aXRhbGlhbi1yZXN0/YXVyYW50LXN5bWJv/bC1vZi1jaGVmLWhv/bGRpbmctY2xvY2hl/LTc2ODhsZC5wbmc_/bndtPTEmbndzPTEm/aW5kdXN0cnk9Zm9v/ZCZ0eHRfa2V5d29y/ZD1BbGw"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

// const RestaurantCard = (props) => {
//   const { resName, cuisine } = props;

const RestaurantCard = (props) => {
  const { resData } = props;



  return (
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
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Sai Fast Food"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" />
      </div>
    </div>
  );
};

const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    id: "334475",
    name: "KFC",
    uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
    city: "1",
    area: "BTM Layout",
    totalRatingsString: "500+ ratings",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 36,
    minDeliveryTime: 36,
    maxDeliveryTime: 36,
    slaString: "36 MINS"
  }
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header // Body // Footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
