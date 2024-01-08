import { useEffect, useState } from "react";

import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login")
    const onlineStatus = useOnlineStatus()
    console.log("HEADER START")
    useEffect(() => {
        console.log("Header useEffect Called");
    }, [authBtn])
    console.log("HEADER END")
    return (
        <div className="header">
             {/* {(() => {console.log("header function called")})()} */}
            <div className="logo-container">
                {/* <img 
                    className="logo"
                    src="./assets/Food.png"
                /> */}
                
                <img 
                    className="logo"
                    src={LOGO_URL}                 
                />
            </div>
            <div className="nav-items">
                <ul className="list">
                    <li>Online Status : {onlineStatus? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button 
                    className="login"
                    onClick={() => {
                        authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")
                    }}
                    >{authBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;