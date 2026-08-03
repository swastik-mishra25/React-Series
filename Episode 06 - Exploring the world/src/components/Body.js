import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // According to the API....I have

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");

  // Use of Hooks (According to the tutorial)

  // Local State Variable - Super powerful variable

  // const [listOfRestaurants, setListOfRestaurant] = useState(
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
  // resList, // [] // If my listofrestaurant is empty
  // );

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

  // According to the Tutorial

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();

      // console.log(json); According to the tutorial

      const restaurants =
        eval(
          "json?." +
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        ) || [];

      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // But this is according to the API I have

  useEffect(() => {
    fetchData();
  }, []);

  // Not a good way to write the code...
  // setListOfRestaurant(json.data.cards[2].data.data.cards);
  // For that reason we use optional chaining..This is how you fetch data and render this data
  // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);

  // It is okay but not a good way !!
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

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
