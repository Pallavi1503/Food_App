import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { useEffect, useState } from "react";
import Shimer from "../Shimer/Shimer";

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([])

    const handleFilter=()=>{
        console.log('hellow filter')
        const filteredList=listOfRestaurants.filter(res=>
          res.info.avgRating>=4
        )
        setListOfRestaurants(filteredList)
    }
    const fetchData=async()=>{
      const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
       
      );
      console.log(response)

      const data=await response.json();
      console.log(data?.data)
      setListOfRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
    }
     
    useEffect(()=>{
      fetchData()
    },[])

   

    return listOfRestaurants.length===0?
    (<Shimer/>):
    (
      <div className="body">
        <div className="search">Search</div>
        <div className="filter" style={{backgroundColor:'#8517036e'}}>
            <h4 className="filter-btn" >Filter your searches...</h4>
            <button className="filter-btn"  onClick={handleFilter}>Top Rated Restaurants</button>
        </div>
        <div style={{display:'flex'}}>
          <div className="resto-container">
            {listOfRestaurants.map((resObj) => (
              <RestaurantCard key={resObj.info.id} resData={resObj} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Body;