import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <nav className="navBar">
                <Link to="/">
                    <p className="logo">jurold.</p>
                </Link>
                <ul className="menuList">
                    <Link to="/" className="menuItem">All</Link>
                    <Link to="/category/landscapes" className="menuItem">Landscapes</Link>
                    <Link to="/category/animals" className="menuItem">Animals</Link>
                    <Link to="/category/street" className="menuItem">Street</Link>
                    <Link to="/category/nature" className="menuItem">Nature</Link>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;