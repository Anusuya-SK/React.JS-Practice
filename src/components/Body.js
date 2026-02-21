import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="main">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter((res) => res.rating > 4);
                    console.log(filteredList);
                }}>Top Rated Restaurants</button>
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