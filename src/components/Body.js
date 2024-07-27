import RestaurantCard, { setPromotedRestaurantCard } from "./Restaurantcard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const PromotedRestaurantCard = setPromotedRestaurantCard(RestaurantCard);

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
  const {username, setUser}= useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();


    const test = json?.data?.cards;
    /** below code filters for the card which has restaurants */
    const result = test.filter(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const validData =
      result[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsList(validData);
    setFilteredRestaurantsList(validData);
  };
  const status = useOnlineStatus();
  if (status === false) {
    return <h1>you are offline thammudu internet ochaka malli kalusdam</h1>;
  }

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center">
        <div className="">
          <button
            className="bg-gray-300 p-4 m-4 rounded-lg"
            data-testid="topRated"
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
            data-testid="searchInput"
            placeholder="search for restaurants"
            className="p-4 "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            className="bg-gray-400 p-4 my-4 rounded-lg"
            onClick={() => {
              const data = filterdata(searchText, restaurantsList);
              setFilteredRestaurantsList(data);
            }}
          >
            search
          </button>
        </div>
        <div >
          <label>Username:</label>
          <input className="border border-black p-2" type="text" value={username} onChange={(e)=>setUser(e.target.value)}/>
        </div>
      </div>

      <div  className="flex flex-wrap">
        {filteredRestaurantsList.map((restaurant) => (
          <Link
            key={restaurant.info["id"]}
            to={"restaurants/" + restaurant.info["id"]}
          >
            <div data-testid="resCard">
            {restaurant.info["isOpen"] ? (
              <PromotedRestaurantCard respData={restaurant.info} />
            ) : (
              <RestaurantCard  respData={restaurant.info} />
            )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
