import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="main">
            <div className="filter">
                <btn className="filter-btn" onClick={() => console.log("Button Clicked")} />
            </div>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;