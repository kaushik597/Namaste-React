import RestaurantCard  from "./Restaurantcard"
import restaurants from "../utils/mockdata"
import { useState } from "react"

const filterdata=(searchText,restaurants)=>{
const results = restaurants.filter((restaurant)=>{
   const result = restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
   return result;
})
return results;
 
}
const Body =() =>{
    const [searchText,setSearchText]=useState("");
    const [restaurantsList,setRestaurantsList] = useState(restaurants)
    return(

        
        <div className="body">
            <div className="search-container">
            <input type="text" placeholder="search for restaurants" className="search-input" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button type="submit" className="search-button" onClick={
                ()=>{ 
            const data=filterdata(searchText,restaurantsList)
            console.log('aaaaaaaaaaaaaaaaaaaaaaa',data);
            setRestaurantsList(data) 
  
        }}
        >search</button>
            </div>

            <div className="res-container">
                    
                    {restaurantsList.map(restaurant =><RestaurantCard key={restaurant.info["id"]} respData ={restaurant.info}/>)}
            </div>
            
        </div>
    )
}

export default Body