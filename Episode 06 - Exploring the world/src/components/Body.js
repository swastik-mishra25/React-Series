import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Use of Hooks

  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState(
    // [
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
    // resList
    [], // If my listOfRestaurants is empty
  );

  // NORMAL JS VARIABLE
  // let listOfRestaurants;

  // Normal JS Variable
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2303877&lng=84.8629086&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    // Tutorial and Hard-coded method

    //     console.log(json);
    //     console.log(
    //        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //     );

    //     console.log(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length
    // );

    // Chatgpt version of the console.log !! As it is making it dynamic !!

    // const restaurantCard = json?.data?.cards?.find(
    //   (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // console.log(restaurantCard);

    // setListOfRestaurant(
    //   restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    // );

    // const restaurantIndex = json?.data?.cards?.findIndex(
    //   (card) =>
    //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    // console.log(restaurantIndex);

    // Not a good way to write the code...
    // setListOfRestaurant(json.data.cards[2].data.data.cards);

    // For that reason we use optional chaining.
    // This is how you fetch data and render this data.
    // setListOfRestaurant(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || []
    // );

    // Dynamic suggestion by chatgpt..

    const restaurantIndex = json?.data?.cards?.findIndex(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    const restaurantCard = json?.data?.cards[restaurantIndex];

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurant(restaurants);
    console.log(restaurantIndex);
  };

  // It is okay but not a good way!!
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">Search</div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // For the useState hook
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );

            setListOfRestaurant(filteredList);

            // For checking whether the onClick is working or not
            // console.log("Button Clicked");

            // Filter logic here for normal JavaScript
            // listOfRestaurants = listOfRestaurants.filter(
            //   (res) => res.data.avgRating > 4
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

        {/* <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Food"
        /> */}

        {/* FOR KFC ONCE
        <RestaurantCard resData={resList} />
        */}

        {/* FOR MANY RESTAURANTS
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

        {/* THE BEST PRACTICE */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
