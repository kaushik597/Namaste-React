import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resid) => {
  const [initialData, setInitialData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://corsproxy.io/?" + MENU_API + resid, {
        mode: "cors",
      });
      let json = await data.json();

      let menuItems = await json.data.cards[4].groupedCard.cardGroupMap.REGULAR
        .cards;

      let items = await menuItems.filter((item) => {
        return (
          item?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      });
      setInitialData(items);
    } catch (err) {
      console.error("Error fetching data:", error);
    }
  };
  return initialData;
};

export default useRestaurantMenu;
