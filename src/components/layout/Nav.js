import logo from '../../images/logo.png';

function Nav() {
    return(
        <nav>
            <img id='logo' src={logo} alt='JungDam Logo'/>
            <ul>
                <li className='active'>HOME</li>
                <li>MENU</li>
                <li>GALLERY</li>
            </ul>
        </nav>
    );
}

export default Nav;