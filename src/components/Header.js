import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";

const Header = () => {

    const [loginBtnName, setLoginBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        loginBtnName === "Login" ? setLoginBtnName("Logout") : setLoginBtnName("Login");
                    }}>{loginBtnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;