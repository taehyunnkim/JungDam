import logo from '../../images/Logo_small.png';
import {
    NavLink
  } from "react-router-dom";

function Nav({showNav, page}) {
    return(
        <nav className={showNav + " " + (page === "menu" ? "revealNav" : "")} >
            <div>
                <img id='logo' src={logo} alt='JungDam Logo'/>
                <ul>
                    <li id='home-nav'><NavLink exact strict to="/" activeClassName="active">HOME</NavLink></li>
                    <li id='menu-nav'><NavLink exact strict to="/menu" activeClassName="active">MENU</NavLink></li>
                    <li id='gallery-nav'><NavLink exact strict to="/gallery" activeClassName="active">GALLERY</NavLink></li>
                </ul>
            </div>

            { page === "menu" ? 
                <div className="shortcut">
                <a href="#premium">명품</a>
                <a href="#special">스페셜</a>
                <a href="#alchan">알찬</a>
                <a href="#silsok">실속</a>
                <a href="#japanese">일품</a>
                <a href="#event">행사</a>
                <a href="#lunch">정기식단</a>
                <a href="#western">맞춤양식</a>
                <a href="#korean">맞춤한식</a>
                <a href="#kids">어린이</a>
                <a href="#hike">등산</a>
                <a href="#snacks">간식</a>
            </div> : null
            }
        </nav>
    );
}

export default Nav;