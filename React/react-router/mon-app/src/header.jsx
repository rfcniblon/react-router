import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <ul>
                <li><NavLink activeClassName="active" exact to="/">Accueil</NavLink></li>
                <li><NavLink activeClassName="active" to="/my-history">History</NavLink></li>
            </ul>
        </div>

    )

}

export default Header;