import React,{useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between p-4" onClick={()=>setShowIndex()}>
        <span className="font-bold text-lg">{data.title} ({data.categories[0].itemCards?.length})</span>
        <span ><IoIosArrowDown/></span>
        </div>
        <div>
        {showItems && <ItemList data={data.categories[0].itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory