import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

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

export default Body;