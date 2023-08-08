import * as test from "../utils/constants";
const RestaurantCard=(props)=>{
    const {cloudinaryImageId,name,avgRating,cuisines}=props?.respData
    return (
        <div className="res-card">
            <img className="img-container" src={test.IMAGES_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    )
}

export default RestaurantCard