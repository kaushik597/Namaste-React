import { useDispatch } from "react-redux";
import { IMAGES_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Itemlist = (list, dummy) => {
  console.log("list item list", list);
  const dispatch = useDispatch()
  const handleAdd=(item)=>{
    console.log("handleClick clicked");
    dispatch(addItem(item));

  };
  return (
    <div className="flex flex-col">
      {list.list.map((item) => (
        <div className="border-b-2 border-b-slate-200 flex justify-between m-5 p-4 ">
          <div className="">
            <p className="font-bold">{item.card.info.name}</p>
            <p className="font-bold">
              ₹{" "}
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </p>
            <p className="">
              ⭐ {item.card.info.ratings.aggregatedRating.rating}
            </p>
            {/* <p>{item.card.info.description}</p> */}
          </div>
          <div>
          <button className="text-green-800 bg-white rounded-lg font-bold p-3 mx-10 my-20 absolute cursor-pointer " onClick={()=>handleAdd(item)}>ADD</button>

            <img
              className="w-[150px] cursor-pointer"
              src={IMAGES_URL + item.card.info.imageId}
              alt="image"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
