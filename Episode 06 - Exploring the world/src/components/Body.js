import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Use of Hooks

  // Local State Variable - Super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState(
    //   [
    //   {
    //     data: {
    //       id: "334476",
    //       name: "KFC",
    //       cloudinaryImageId: "dominospizza123",
    //       cuisines: ["Pizza", "Italian", "Fast Food"],
    //       costForTwo: 60000,
    //       deliveryTime: 30,
    //       avgRating: 3.8,
    //     },
    //   },
    //   {
    //     data: {
    //       id: "334477",
    //       name: "Domino's Pizza",
    //       cloudinaryImageId: "dominospizza123",
    //       cuisines: ["Pizza", "Italian", "Fast Food"],
    //       costForTwo: 60000,
    //       deliveryTime: 30,
    //       avgRating: 4.4,
    //     },
    //   },
    //   {
    //     data: {
    //       id: "334478",
    //       name: "MCD",
    //       cloudinaryImageId: "dominospizza123",
    //       cuisines: ["Pizza", "Italian", "Fast Food"],
    //       costForTwo: 60000,
    //       deliveryTime: 30,
    //       avgRating: 4.1,
    //     },
    //   },
    // ]
    resList,
  );

  // NORMAL JS VARIABLE
  // let listOfRestaurants;

  // Normal Js Variable
  // let listOfRestaurants = [
  //   {
  //     data: {
  //       id: "334476",
  //       name: "KFC",
  //       cloudinaryImageId: "dominospizza123",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       costForTwo: 60000,
  //       deliveryTime: 30,
  //       avgRating: 3.8,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "dominospizza123",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       costForTwo: 60000,
  //       deliveryTime: 30,
  //       avgRating: 4.4,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334478",
  //       name: "MCD",
  //       cloudinaryImageId: "dominospizza123",
  //       cuisines: ["Pizza", "Italian", "Fast Food"],
  //       costForTwo: 60000,
  //       deliveryTime: 30,
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);
    // Not a good way to write the code...
    // setListOfRestaurant(json.data.cards[2].data.data.cards);
    // For that reason we use optional chaining..
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // For the usestate hook

            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4,
            );
            setListOfRestaurant(filteredList);

            // For checking whether the onclick is working is not !!

            // console.log("Button Clicked");

            // Filter logic here for normal javascript

            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.data.avgRating > 4,
            // );
            // console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
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

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
