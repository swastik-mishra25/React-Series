import React from "react";
import ReactDOM from "react-dom/client";



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
    deliveryTime,
  } = resData?.data;

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

  return (
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
      {/* <h4>{resData.data.costForTwo / 100}</h4> */}
      <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
    </div>
  );

  //Best Practices

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>4.5 stars</h4>
      {/* <h4>{resData.data.costForTwo / 100}</h4> */}
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

//Below one is the example of KFC

// const resObj = {
//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "334475",
//     name: "KFC",
//     uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
//     city: "1",
//     area: "BTM Layout",
//     totalRatingsString: "500+ ratings",
//     cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//     tags: [],
//     costForTwo: 40000,
//     costForTwoString: "₹400 FOR TWO",
//     deliveryTime: 36,
//     minDeliveryTime: 36,
//     maxDeliveryTime: 36,
//     slaString: "36 MINS",
//   },
// };

// Now more than one resturant !!

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334476",
      name: "Domino's Pizza",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789001",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "10K+ ratings",
      cloudinaryImageId: "dominospizza123",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      tags: [],
      costForTwo: 60000,
      costForTwoString: "₹600 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "30 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334477",
      name: "McDonald's",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789002",
      city: "1",
      area: "Indiranagar",
      totalRatingsString: "20K+ ratings",
      cloudinaryImageId: "mcd123",
      cuisines: ["Burgers", "Fries", "Beverages"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 25,
      maxDeliveryTime: 30,
      slaString: "28 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334478",
      name: "Burger King",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789003",
      city: "1",
      area: "HSR Layout",
      totalRatingsString: "8K+ ratings",
      cloudinaryImageId: "bk123",
      cuisines: ["Burgers", "Fast Food"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 32,
      minDeliveryTime: 30,
      maxDeliveryTime: 35,
      slaString: "32 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334479",
      name: "Pizza Hut",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789004",
      city: "1",
      area: "Marathahalli",
      totalRatingsString: "7K+ ratings",
      cloudinaryImageId: "pizzahut123",
      cuisines: ["Pizza", "Pasta"],
      tags: [],
      costForTwo: 70000,
      costForTwoString: "₹700 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "35 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334480",
      name: "Subway",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789005",
      city: "1",
      area: "Whitefield",
      totalRatingsString: "5K+ ratings",
      cloudinaryImageId: "subway123",
      cuisines: ["Healthy Food", "Sandwich", "Salads"],
      tags: [],
      costForTwo: 55000,
      costForTwoString: "₹550 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 25,
      maxDeliveryTime: 30,
      slaString: "27 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334481",
      name: "Biryani By Kilo",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789006",
      city: "1",
      area: "JP Nagar",
      totalRatingsString: "12K+ ratings",
      cloudinaryImageId: "bbk123",
      cuisines: ["Biryani", "North Indian"],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "₹800 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 40,
      maxDeliveryTime: 45,
      slaString: "42 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334482",
      name: "Meghana Foods",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789007",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "30K+ ratings",
      cloudinaryImageId: "meghana123",
      cuisines: ["Biryani", "Andhra", "Chinese"],
      tags: [],
      costForTwo: 75000,
      costForTwoString: "₹750 FOR TWO",
      deliveryTime: 38,
      minDeliveryTime: 35,
      maxDeliveryTime: 40,
      slaString: "38 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334483",
      name: "Faasos",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789008",
      city: "1",
      area: "Bellandur",
      totalRatingsString: "9K+ ratings",
      cloudinaryImageId: "faasos123",
      cuisines: ["Rolls", "Fast Food"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 30,
      maxDeliveryTime: 35,
      slaString: "31 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334484",
      name: "Behrouz Biryani",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789009",
      city: "1",
      area: "Electronic City",
      totalRatingsString: "15K+ ratings",
      cloudinaryImageId: "behrouz123",
      cuisines: ["Biryani", "Mughlai"],
      tags: [],
      costForTwo: 85000,
      costForTwoString: "₹850 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "40 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334485",
      name: "WOW! Momo",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789010",
      city: "1",
      area: "Jayanagar",
      totalRatingsString: "6K+ ratings",
      cloudinaryImageId: "wowmomo123",
      cuisines: ["Momos", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 29,
      minDeliveryTime: 25,
      maxDeliveryTime: 30,
      slaString: "29 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334486",
      name: "Taco Bell",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789011",
      city: "1",
      area: "MG Road",
      totalRatingsString: "4K+ ratings",
      cloudinaryImageId: "tacobell123",
      cuisines: ["Mexican", "Fast Food"],
      tags: [],
      costForTwo: 65000,
      costForTwoString: "₹650 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 30,
      maxDeliveryTime: 35,
      slaString: "33 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334487",
      name: "Chinese Wok",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789012",
      city: "1",
      area: "Banashankari",
      totalRatingsString: "5K+ ratings",
      cloudinaryImageId: "chinesewok123",
      cuisines: ["Chinese", "Noodles"],
      tags: [],
      costForTwo: 55000,
      costForTwoString: "₹550 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 30,
      maxDeliveryTime: 35,
      slaString: "34 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334488",
      name: "The Belgian Waffle Co.",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789013",
      city: "1",
      area: "Malleshwaram",
      totalRatingsString: "3K+ ratings",
      cloudinaryImageId: "waffle123",
      cuisines: ["Desserts", "Waffles"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 25,
      maxDeliveryTime: 30,
      slaString: "26 MINS",
    },
  },

  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334489",
      name: "Barbeque Nation",
      uuid: "a1b2c3d4-e5f6-7890-abcd-123456789014",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "18K+ ratings",
      cloudinaryImageId: "bbqnation123",
      cuisines: ["North Indian", "Barbecue", "Kebabs"],
      tags: [],
      costForTwo: 120000,
      costForTwoString: "₹1200 FOR TWO",
      deliveryTime: 45,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "45 MINS",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard

          resName="Sai Fast Food"
          cuisine="Biryani, North Indian, Asian"
        /> */}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
        {/* FOR KFC ONCE
        <RestaurantCard resData={resList} /> */}

        {/* FOR MANY RESTAURANT

        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />

        */}

        {/* THE BEST PRACTICE  */}

        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
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

// Completed
