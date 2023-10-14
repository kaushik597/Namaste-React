import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";



const RestaurantMenu =()=>{
    const [initialData,setInitialData]=useState(null)
    const [details,setDetails] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])
    const {resid}= useParams();
    console.log("a",MENU_API,resid);

    const fetchData =async()=>{
        const data = await fetch(MENU_API+resid)
        const json = await data.json();
        let fetchedData=json?.data?.cards[0]?.card?.card?.info
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setInitialData(fetchedData)
        console.log(initialData);

        const {itemCards} = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        console.log('*****',itemCards);
        setDetails(itemCards)
        // console.log("$$$",details);
    }

    if(initialData==null) return <Shimmer />
   const  {name,areaName,cuisines,cloudinaryImageId,costForTwoMessage,avgRating} = initialData;
   const names = details.map(item =>item?.card?.info)
   console.log("^^^^",names);
    return (initialData==null)? <Shimmer />: (
        <div className="menu">
            {console.log("&&&&&&&&",initialData)}
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>Menu</h3>
            <ul>
            {names.map(x=><li key={x?.id}>{x?.name} - Rs: {x?.price/100}</li>)}
            </ul>

            {/* <ul>
                <li>Burger</li>
                <li>Biryani</li>
                <li>Bammardhi</li>
            </ul> */}
        </div>
    )
}

export default RestaurantMenu
