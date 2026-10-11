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

    // Each category replaces the whole page, so the href is only a label — let it
    // jump and the browser lands mid-page instead of at the top. Menu handles the
    // scroll reset once the new category renders.
    function selectMenu(e, category) {
        e.preventDefault();
        setMenu(category);
        removeActive();
        e.target.classList.add("active");
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
                <a href="#premium" className="active" onClick={(e) => selectMenu(e, "premium")}>명품</a>
                <a href="#special" onClick={(e) => selectMenu(e, "special")}>스페셜</a>
                <a href="#alchan" onClick={(e) => selectMenu(e, "alchan")}>알찬</a>
                <a href="#silsok" onClick={(e) => selectMenu(e, "silsok")}>실속</a>
                <a href="#japanese" onClick={(e) => selectMenu(e, "japanese")}>일품</a>
                <a href="#event" onClick={(e) => selectMenu(e, "event")}>행사</a>
                <a href="#lunch" onClick={(e) => selectMenu(e, "lunch")}>정기식단</a>
                <a href="#western" onClick={(e) => selectMenu(e, "western")}>맞춤양식</a>
                <a href="#korean" onClick={(e) => selectMenu(e, "korean")}>맞춤한식</a>
                <a href="#kids" onClick={(e) => selectMenu(e, "kids")}>어린이</a>
                <a href="#snacks" onClick={(e) => selectMenu(e, "snacks")}>간식</a>
            </div>
        </nav>
    );
}

export default Nav;
