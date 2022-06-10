import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <div>
            <nav className="navBar">
                <p className="logo">jurold.</p>
                <ul className="menuList">
                    <li className="menuItem"><a href="/#">All</a></li>
                    <li className="menuItem"><a href="/#">Landscapes</a></li>
                    <li className="menuItem"><a href="/#">Nature</a></li>
                    <li className="menuItem"><a href="/#">Street</a></li>
                    <li className="menuItem"><a href="/#">Portraits</a></li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;