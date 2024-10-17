import React from "react";

const RestaurantCard=(props)=>{
    const {resData}=props;

    return(
        <div className='m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200' data-testid="resCard">
            <img className='rounded-lg' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h4 className="font-bold py-4 text-lg">{resData.info.name}</h4>
            <h5 >{resData.info.cuisines.join(",")}</h5>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    )
}

export const withPromotedTag=(RestaurantCard)=>{
    return (props)=>{
        return(
            <>
            <label className="absolute bg-green-700 text-yellow-300 font-bold m-2 p-2 rounded-lg">Open</label>
            <RestaurantCard {...props}/>
            </>

        )
    }
}

export default RestaurantCard;