import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const filterdata = (searchText, restaurants) => {
  const results = restaurants.filter((restaurant) => {
    const result = restaurant?.info?.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return result;
  });
  return results;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const test = json?.data?.cards;
    /** below code filters for the card which has restaurants */
    const result = test.filter(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("card", result);
    const validData =
      result[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("valid data", validData);
    setRestaurantsList(validData);
    setFilteredRestaurantsList(validData);
  };
  const status = useOnlineStatus()
  console.log("%%%%%%%%%%%%%%%",status);
  if(status===false){
    return <h1>you are offline thammudu internet ochaka malli kalusdam</h1>
  
  }
  

  
  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              let result = filteredRestaurantsList.filter(
                (restaurant) => restaurant.info.avgRating >= 4.2
              );
              setFilteredRestaurantsList(result);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="search for restaurants"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="search-button"
            onClick={() => {
              const data = filterdata(searchText, restaurantsList);
              console.log("aaaaaaaaaaaaaaaaaaaaaaa", data);
              setFilteredRestaurantsList(data);
            }}
          >
            search
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurantsList.map((restaurant) => (
          <Link key={restaurant.info["id"]} to={"restaurants/" + restaurant.info["id"]}>
            <RestaurantCard
            
            respData={restaurant.info}
          />
          </Link>
        
        ))}
      </div>
    </div>
  )
}

export default Body;
