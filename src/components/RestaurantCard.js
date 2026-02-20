export const RestaurantCard = ({ resData }) => {
    const { image, resName, rating, address, cuisines, priceForTwo } = resData;
    return (
        <div className="res-card">
            <img src={image} alt={resName} />
            <h2>{resName}</h2>
            <p>{cuisines.join(", ")}</p>
            <h4>⭐ {rating}</h4>
            <p>{priceForTwo}</p>
            <p>{address}</p>
        </div>
    )
}

export default RestaurantCard;