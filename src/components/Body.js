import RestaurantCard  from "./Restaurantcard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"

const filterdata=(searchText,restaurants)=>{
const results = restaurants.filter((restaurant)=>{
   const result = restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
   return result;
})
return results;
 
}


const Body =() =>{
    const [searchText,setSearchText]=useState("");
    const [restaurantsList,setRestaurantsList] = useState([])
    const [filteredRestaurantsList, setFilteredRestaurantsList] =useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantsList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantsList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }


    return restaurantsList.length === 0?<Shimmer />:(

        
        <div className="body">
            <div className="filter">
            <div className="filter-container">
                <button className="filter-btn" onClick={()=>{  
                       let result= filteredRestaurantsList.filter(restaurant=>restaurant.info.avgRating>=4.2)
                       setFilteredRestaurantsList(result)
                }}>Top rated restaurants</button>
            </div>
            <div className="search-container">
            <input type="text" placeholder="search for restaurants" className="search-input" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button type="submit" className="search-button" onClick={
                ()=>{ 
            const data=filterdata(searchText,restaurantsList)
            console.log('aaaaaaaaaaaaaaaaaaaaaaa',data);
            setFilteredRestaurantsList(data) 
  
        }}
        >search</button>
            </div>
            </div>
          

            <div className="res-container">
                    
                    {filteredRestaurantsList.map(restaurant =><RestaurantCard key={restaurant.info["id"]} respData ={restaurant.info}/>)}
            </div>
            
        </div>
    )
}

export default Body