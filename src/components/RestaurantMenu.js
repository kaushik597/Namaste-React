import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const { initialData, details } = useRestaurantMenu(resid);

  if (initialData == null) return <Shimmer />;
  const {
    name,
    areaName,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    avgRating,
  } = initialData;
  const names = details.map((item) => item?.card?.info);
  return initialData == null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {names.map((x) => (
          <li key={x?.id}>
            {x?.name} - Rs: {x?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
