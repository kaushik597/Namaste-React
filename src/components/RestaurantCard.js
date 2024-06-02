import * as test from "../utils/constants";
const RestaurantCard=(props)=>{
    const {cloudinaryImageId,name,avgRating,cuisines}=props?.respData
    return (
        // <div className="">
            <div className="w-[200px] bg-slate-200 m-2 p-2  border-solid">
            <img className="rounded-lg" src={test.IMAGES_URL+cloudinaryImageId}></img>
            <h3 className="font-normal hover:font-bold">{name}</h3>
            <h3>{avgRating}</h3>
            <h3>{cuisines.join(", ")}</h3>
            </div>
            
        // </div>
    )
}

export default RestaurantCard