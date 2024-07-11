import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const initialData = useRestaurantMenu(resid);
  const [showIndex, setShowIndex]= useState(null)
 
  const dummyData =  "Kaushik";
  if (initialData == null) return <Shimmer />;

  return initialData == null ? (
    <Shimmer />
  ) : (
    initialData.map((category,index) => <RestaurantCategory
     key={category.card.card.title}  
     data={category} 
     flag={index===showIndex ? true: false} 
     setShowIndex={()=>setShowIndex(index)}
     index={index}
     dummy={dummyData}
      />)
  );
};

export default RestaurantMenu;
