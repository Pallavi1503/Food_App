import RestaurantCard, { withPromotedTag } from "../RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "../Shimer/Shimer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const RestaurantCardPromoted=withPromotedTag(RestaurantCard);
  const [searchText, setSearchText] = useState("");
  const handleFilter = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4
    );
    setListOfRestaurants(filteredList);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurants.length === 0 ? (
    <Shimer />
  ) : (
    <div className="body">
      <div className="flex">
       <div className="search m-4 p-4">
        <input
        className="border border-solid border-black"
          type="text"
          data-testid="searchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const list = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurants(list);
          }}
        >
          Search
        </button>
       </div>
       <div className="m-4 p-4 flex items-center" >
        <button className="px-4 py-2 bg-gray-100 rounded-lg" 
        onClick={handleFilter}>
          Top Rated Restaurants
        </button>
       </div>
      </div>
      
        <div className="flex flex-wrap">
          {filteredListOfRestaurants.map((resObj) => (
            <Link  key={resObj.info.id} to={"/restaurants/"+resObj.info.id}>
              {
                resObj.info.isOpen?<RestaurantCardPromoted resData={resObj}/>:<RestaurantCard resData={resObj} />
              }
            </Link>
          ))}
        </div>
     
    </div>
  );
};

export default Body;
