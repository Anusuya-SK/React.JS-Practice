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

const RestaurantCard = () => {
    return (
        <div>
            <h2>Mehana Foods</h2>
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <h3>Search</h3>
            <RestaurantCard />
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