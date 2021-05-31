import logo from '../../images/logo.png';
import {
    NavLink
  } from "react-router-dom";

import {useRef} from 'react';

function Nav({showNav, page, setMenu}) {
    const shortcuts = useRef(null);

    function removeActive() {
        let shortcut = shortcuts.current.children;
        for(let i = 0; i < shortcut.length; i++) {
            shortcut[i].classList.remove("active");
        }
    }

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

            <div className={"shortcut " + (page === "menu" ? "revealShortcut" : "")} ref={shortcuts}>
                <a href="#premium" className="active" onClick={(e) => {setMenu("premium"); removeActive(); e.target.classList.add("active")}}>명품</a>
                <a href="#special" onClick={(e) => {setMenu("special"); removeActive(); e.target.classList.add("active")}}>스페셜</a>
                <a href="#alchan" onClick={(e) => {setMenu("alchan"); removeActive(); e.target.classList.add("active")}}>알찬</a>
                <a href="#silsok" onClick={(e) => {setMenu("silsok"); removeActive(); e.target.classList.add("active")}}>실속</a>
                <a href="#japanese" onClick={(e) => {setMenu("japanese"); removeActive(); e.target.classList.add("active")}}>일품</a>
                <a href="#event" onClick={(e) => {setMenu("event"); removeActive(); e.target.classList.add("active")}}>행사</a>
                <a href="#lunch" onClick={(e) => {setMenu("lunch"); removeActive(); e.target.classList.add("active")}}>정기식단</a>
                <a href="#western" onClick={(e) => {setMenu("western"); removeActive(); e.target.classList.add("active")}}>맞춤양식</a>
                <a href="#korean" onClick={(e) => {setMenu("korean"); removeActive(); e.target.classList.add("active")}}>맞춤한식</a>
                <a href="#kids" onClick={(e) => {setMenu("kids"); removeActive(); e.target.classList.add("active")}}>어린이</a>
                <a href="#hike" onClick={(e) => {setMenu("hike"); removeActive(); e.target.classList.add("active")}}>등산</a>
                <a href="#snacks" onClick={(e) => {setMenu("snacks"); removeActive(); e.target.classList.add("active")}}>간식</a>
            </div>
        </nav>
    );
}

export default Nav;