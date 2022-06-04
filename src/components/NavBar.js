import "./NavBar.css";

const NavBar = () => {
    return(
        <nav className="navBar">
            <p className="logo">jurold.</p>
            <ul className="menuList">
                <li className="menuItem"><a href="/#">home</a></li>
                <li className="menuItem"><a href="/#">about</a></li>
                <li className="menuItem"><a href="/#">shop</a></li>
                <li className="menuItem"><a href="/#">contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;