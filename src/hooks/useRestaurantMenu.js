import {useState,useEffect} from 'react';

const useRestaurantMenu=(resId)=>{

    const [restData, setResData] = useState(null);
    useEffect(() => {
        const fetchMenu = async () => {
          const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${resId}`
          );
          const json = await data.json();
          setResData(json.data);
        };
        fetchMenu();
      }, []);
      
      return restData;
}

export default useRestaurantMenu