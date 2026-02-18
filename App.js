import React from "react";
import ReactDOM from "react-dom/client";

// Header
//     - Logo
//     - Nav Items
// Body
//     - Search
//     - Restaurant Container
//         - Restaurant Card
//             - Dish Name
//             - Image
//             - Restaurant Name
//             - Rating
//             - Cuisines
//             - Time to Deliver

// Footer
//     - Copyright
//     - Links
//     - Address
//     - Contact

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20240806/ourlarge/pngtree-free-food-delivery-logo-template-png-image_13394103.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList = [
    {
        id: 1,
        resName: "Meghana Foods",
        rating: 4.5,
        address: "BTM Layout, Bangalore",
        cuisines: ["Biryani", "Andhra", "North Indian"],
        priceForTwo: "₹600 for two",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 2,
        resName: "KFC",
        rating: 4.1,
        address: "Koramangala, Bangalore",
        cuisines: ["Fried Chicken", "Fast Food", "Burgers"],
        priceForTwo: "₹500 for two",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 3,
        resName: "McDonald's",
        rating: 4.2,
        address: "MG Road, Bangalore",
        cuisines: ["Burgers", "Fast Food", "Beverages"],
        priceForTwo: "₹400 for two",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop&auto=format"
    },
    {
        id: 4,
        resName: "Dominos",
        rating: 4.0,
        address: "HSR Layout, Bangalore",
        cuisines: ["Pizza", "Italian", "Fast Food"],
        priceForTwo: "₹700 for two",
        image: "https://images.unsplash.com/photo-1548365328-8b849f5893c1?w=400&h=300&fit=crop&auto=format"
    }
];

const RestaurantCard = ({ resData }) => {
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

const Body = () => {
    return (
        <div className="main">
            <h3>Search</h3>
            <div className="res-container">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);