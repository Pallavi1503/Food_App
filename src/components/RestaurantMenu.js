import React,{useState} from "react";
import Shimer from "./Shimer/Shimer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const {resId}=useParams();
  const restData=useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null)
  if(restData === null ) {
    return <Shimer />
  }

  const {name,cuisines,cloudinaryImageId,costForTwoMessage}=restData?.cards[2].card?.card?.info
  const {itemCards}=restData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  const categories= restData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
  c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</h3>
      {
        categories.map((category,index)=>(
          <RestaurantCategory  
          data={category?.card?.card} 
          showItems={index===showIndex?true:false}
          setShowIndex={()=>setShowIndex(index)}/>
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
