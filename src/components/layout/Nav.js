import logo from '../../images/logo.png';
import { useRef, useEffect } from 'react';

function Nav({ setPage, currentPage }) {
    let lists = useRef();

    useEffect(() => {
        for(let i = 0; i < lists.current.children.length; i++) {
            if(lists.current.children[i].id === currentPage + '-nav') {
                lists.current.children[i].classList.add('active');
            } else {
                lists.current.children[i].classList.remove('active');
            }
        }
    }, [currentPage]);

    return(
        <nav>
            <img id='logo' src={logo} alt='JungDam Logo'/>
            <ul ref={lists}>
                <li id='home-nav' className='active' onClick={() => {setPage('home');}}>HOME</li>
                <li id='menu-nav' onClick={() => {setPage('menu');}}>MENU</li>
                <li id='gallery-nav' onClick={() => {setPage('gallery');}}>GALLERY</li>
            </ul>
        </nav>
    );
}

export default Nav;