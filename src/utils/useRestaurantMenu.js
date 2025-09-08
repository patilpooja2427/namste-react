import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [ resInfo, setResInfo ] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:3001/restaurant");
    const json = await data.json();
    json.length != 0 ? setResInfo(json[resId]) : setResInfo([]);
  };

  return resInfo;
};

export default useRestaurantMenu;
