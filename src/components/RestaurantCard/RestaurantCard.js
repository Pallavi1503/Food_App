const RestaurantCard=(props)=>{
    const {resData}=props;
    
    return(
        <div className='res-card'>
            <img className='res-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h4>{resData.info.name}</h4>
            <h5 style={{wordBreak: 'break-all'}}>{resData.info.cuisines.join(",")}</h5>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;