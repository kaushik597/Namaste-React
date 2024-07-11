import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = (props) => {
  const [i,setI]= useState(false)
  const togglemenu = () => {
    props.setShowIndex();
    setI(true);
    if(i){
      setI(false)
    }


  };
  return (
    <div className="mx-72 my-5 ">
      <div className=" border-solid border-2 fill-black m-4 p-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={togglemenu}>
          <h2 className=" font-bold ">{props.data.card.card.title}</h2>
          <span>🔽</span>
        </div>

        {i && props.flag && <Itemlist list={props.data.card.card.itemCards} dummy={props.dummy}/>}
      </div>

    </div>
  );
};
export default RestaurantCategory;
