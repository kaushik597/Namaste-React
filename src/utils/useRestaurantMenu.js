import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resid) =>{
    const [initialData,setInitialData]=useState(null)
    const [details,setDetails] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    
    const fetchData =async()=>{
        const data = await fetch('https://corsproxy.io/?'+MENU_API+resid, {mode:'cors'})
        const json = await data.json();
        let fetchedData=json?.data?.cards[2]?.card?.card?.info
        console.log(json?.data?.cards[2]?.card?.card?.info);
        setInitialData(fetchedData)
        console.log(initialData,fetchedData);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);

        const {itemCards} = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
        console.log('*****',itemCards);
        setDetails(itemCards)
        console.log("$$$",details);
    }
    return {initialData,details}
}

export default useRestaurantMenu