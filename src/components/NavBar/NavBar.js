import React, { useState } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const NavBar = () => {
    const[isActive, setIsActive] = useState(false)
    const activeSwitch = () => {
        isActive ? setIsActive(false) : setIsActive(true);
    }
    const goToCart = () => {
        isActive ? setIsActive(false) : setIsActive(false);
    }

    return(
        <div className={`navBarContainer ${isActive ? 'active' : ''}`}>
            <nav className="navBar">
                <Link to="/">
                    <p className="logo">jurold.</p>
                </Link>
                <ul className="menuList" onClick={activeSwitch}>
                    <Link to="/" className="menuItem">All</Link>
                    <Link to="/category/landscapes" className="menuItem">Landscapes</Link>
                    <Link to="/category/animals" className="menuItem">Animals</Link>
                    <Link to="/category/street" className="menuItem">Street</Link>
                    <Link to="/category/nature" className="menuItem">Nature</Link>
                </ul>
                <Tippy content="Carrito de compras" placement="bottom">
                    <div className="cartIcon" onClick={goToCart}>
                        <CartWidget/>
                    </div>
                </Tippy>
                <div className={`hamburgerIndex ${isActive ? 'active' : ''}`} onClick={activeSwitch}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                 </div>
            </nav>
        </div>
    );
};

export default NavBar;