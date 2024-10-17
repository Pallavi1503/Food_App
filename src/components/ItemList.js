import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item))
  }
  
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>- ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute my-16 mx-4">
              <button className="p-2 mx-1 rounded-lg bg-gray-400 hover:bg-black m-auto font-bold text-amber-400"
              onClick={()=>handleAddItem(item)}>
                Add+
              </button>
            </div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
