import logo from '../../images/logo.png';
import {
    NavLink
  } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <img id='logo' src={logo} alt='JungDam Logo'/>
            <ul>
                <li id='home-nav'><NavLink exact strict to="/" activeClassName="active">HOME</NavLink></li>
                <li id='menu-nav'><NavLink exact strict to="/menu" activeClassName="active">MENU</NavLink></li>
                <li id='gallery-nav'><NavLink exact strict to="/gallery" activeClassName="active">GALLERY</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;