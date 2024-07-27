import { useContext } from "react";
import * as test from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard=(props)=>{
    const user = useContext(UserContext)
    // console.log("user in restaurant card", user);
    // console.log(props,"");
    const {cloudinaryImageId,name,avgRating,cuisines}=props?.respData
    return (
        // <div className="">
            <div className="w-52 bg-slate-200 m-2 p-4">
            <img className="rounded-lg" src={test.IMAGES_URL+cloudinaryImageId}></img>
            <h3 className="font-normal hover:font-bold">{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>User: {user.username}</h3>
            </div>
            
        // </div>
    )
}

export const setPromotedRestaurantCard =(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <p className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</p>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard