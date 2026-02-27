import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // Local State Variable
    // Whenever state variable updates, react triggers a reconciliation cycle(re-renders the componenet)
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/recipes");
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setListOfRestaurant(json?.recipes);
        setfilteredRestaurant(json?.recipes)
    }

    // Conditional Rendering
    // if (listOfRestaurant == 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurant == 0 ? <Shimmer /> : (
        <div className="main">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestaurant.filter((res) => (
                            res.name.toLowerCase().includes(searchText.toLowerCase())
                        ));
                        setfilteredRestaurant(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.rating == 5);
                    setfilteredRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;