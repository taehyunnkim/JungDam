import logo from '../../images/logo.png';
import {
    NavLink
  } from "react-router-dom";

function Nav({showNav, page, setMenu}) {
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

            <div className={"shortcut " + (page === "menu" ? "revealShortcut" : "")}>
                <a href="#premium" onClick={() => {setMenu("premium")}}>명품</a>
                <a href="#special" onClick={() => {setMenu("special")}}>스페셜</a>
                <a href="#alchan" onClick={() => {setMenu("alchan")}}>알찬</a>
                <a href="#silsok" onClick={() => {setMenu("silsok")}}>실속</a>
                <a href="#japanese" onClick={() => {setMenu("japanese")}}>일품</a>
                <a href="#event" onClick={() => {setMenu("event")}}>행사</a>
                <a href="#lunch" onClick={() => {setMenu("lunch")}}>정기식단</a>
                <a href="#western" onClick={() => {setMenu("western")}}>맞춤양식</a>
                <a href="#korean" onClick={() => {setMenu("korean")}}>맞춤한식</a>
                <a href="#kids" onClick={() => {setMenu("kids")}}>어린이</a>
                <a href="#hike" onClick={() => {setMenu("hike")}}>등산</a>
                <a href="#snacks" onClick={() => {setMenu("snacks")}}>간식</a>
            </div>
        </nav>
    );
}

export default Nav;