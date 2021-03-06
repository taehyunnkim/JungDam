import { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import '../../scss/Bricks.scss';

import mainImage from '../../images/main_nc.png';
// import houses from '../../images/middle_house.png';
import flower1 from '../../images/flowers/flower1.png';
import flower2 from '../../images/flowers/flower2.png';
import flower3 from '../../images/flowers/flower3.png';
import flower4 from '../../images/flowers/flower4.png';
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import food4 from '../../images/food4.png';
import premium from '../../images/items/Edits/premium_galbi_opt.png';
import event from '../../images/event_2.png';
import special from '../../images/special_2.png';
import Button from '../Button';
import SecondaryButton from '../SecondaryButton';
import TeleButton from '../TeleButton';

import DottedSquare from '../patterns/DottedSquare';

function Landing({ setPage }) {
    const [fade, setFade] = useState('hidden');
    const [slide, setSlide] = useState('up');
    function parallax() { 
        let scroll = window.scrollY; 
        let ele = document.querySelector("#dot-1"); 
        let ele2 = document.querySelector("#dot-2"); 
        let ele3 = document.querySelector("#introduction");

        if(window.pageYOffset < 500) {
            ele.style.transform = "translateY(" + (scroll*0.3) + "px)" 
            ele2.style.top = 170 + -scroll * 0.3 + "px"; 
            ele3.style.transform = "translateY(" + (-scroll*0.1) + "px)"; 
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", parallax);

        setFade('visible');
        setSlide('ogPos');
        setPage("home");
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', parallax);
        };
    },[setFade, setPage]);

    return(
        <div>
            <div id="gradient"></div>
            <div id="patterns">
                <DottedSquare color="orange" id="dot-1" />
                <DottedSquare color="yellow" id="dot-2" />
                <DottedSquare color="yellow" id="dot-3" />
                <DottedSquare color="yellow" id="dot-4" />
            </div>
            <div id="landing" className="first">
                <div id="introduction" className={fade + " container"}>
                    <h1 className="introHeader">NATURAL & SINCERE</h1>
                    <p>????????? ?????? ?????????, ????????? ?????? ???????????????</p>
                    <p>????????? ????????? ??????????????????</p>
                    <Button text="????????????" type="primary" slide={slide} path='menu' />
                    <TeleButton text="????????????" type="secondary" slide={slide} />
                    <p className="order">ORDER 051-782-3630</p>
                </div>
                <div id="houses" className={fade}>
                    {/* <div id="gradient-2"></div> */}
                    {/* <img id="house-image" src={houses} alt="houses" /> */}
                    <Particles 
                        params={{
                            "particles": {
                                "number": {
                                    "value": 7,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "color": {
                                    "value": ["#FFCA3E","#FFCA3E","#7C9D68","#E27C7C"]
                                },
                                "size": {
                                    "value": 5,
                                    "random": true,
                                    "anim": {
                                        "speed": 2,
                                        "size_min": 1
                                    }
                                },
                                "line_linked": {
                                    "enable": false
                                },
                                "move": {
                                    "angle": {
                                        "offset": 45,
                                        "value": 90
                                      },
                                    "path": {
                                        "delay": {
                                            "value": 3,
                                            "random": {
                                                "enable": true,
                                                "min_value": 1
                                            }
                                        },
                                        // "clamp": true,
                                        "enable": true
                                    },
                                    "random": true,
                                    "speed": 1
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "attract"
                                    }
                                },
                                "modes": {
                                    "attract": {
                                        "distance": 100,
                                        "duration": 0.4
                                    }
                                }
                            }
                        }}
                    />
                    <img id="bento-image" src={mainImage} draggable={false} alt="JungDam" />
                    <div id="bricks">
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                    </div>
                </div>
                <div id="filler"></div>
            </div>
            <div id="menu-intro">
                <div></div>
                <div className="introHeading">
                    <h1>MENU INTRODUCTION</h1>
                    <h2>??? ???????????? ????????? ????????? <br />
                        ???????????? ????????????????????????</h2>
                </div>
                <div>
                    <img src={food1} draggable={false} alt="food" />
                    <img src={food2} draggable={false} alt="food" />
                    <img src={food3} draggable={false} alt="food" />
                    <img src={food4} draggable={false} alt="food" />
                </div>
            </div>
            <div id="menu-wrapper">
                <div className="container">
                    <div id="menu-introduction">
                        <div>
                            <p>
                                ????????????, ?????????, ??????MT, ????????? ?????? ???????????? <br />
                                ?????? ????????? ????????? ???????????? ?????? ?????????
                            </p>
                            <p>
                                ?????? ????????? ?????? ?????? ???????????? ????????? ??????????????? ???????????? <br />
                                ?????? ??????????????? ???????????? ?????? ??????????????????.
                            </p>
                            <SecondaryButton text="????????? ??????" path='menu' />
                        </div>
                    </div>
                    <div id="menuCards">
                        <div className="menuCard">
                            <img src={premium} alt="premium" />
                        </div>
                        <div className="menuCard">
                            <img src={event} alt="event" />
                        </div>
                        <div className="menuCard">
                            <img src={special} alt="special" />
                        </div>
                    </div>
                </div>
                <div id="flowers-container" className="container">
                    <div id="flowers" >
                        <img src={flower1} draggable={false} alt="flower1" />
                        <img src={flower2} draggable={false} alt="flower2" />
                        <img src={flower3} draggable={false} alt="flower3" />
                        <img src={flower4} draggable={false} alt="flower4" />
                    </div> 
                </div>
                <div id="menu-bricks" className="container">
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                        <div className="brick"></div>
                </div>
            </div>

            <div className="container">
                <div id="gallery-introduction">
                    <div className="introHeading">
                        <h1>GALLERY INTRODUCTION</h1>
                        <h2>
                            ????????? ???????????? ????????? 
                            <br /> ???????????? ?????????????????????.
                        </h2>

                        {/* <p>?????????????????? <span>?????? ??????</span>??? ?????? ????????? ???????????? ????????????.</p>
                        <p>????????????????????? <span>????????? ???</span>??? <span>????????? ??????</span>??? ????????????.</p> */}
                        <SecondaryButton text="????????? ??????" path='gallery' />
                    </div>
                    <div id="gallery-preview">
                        <div>
                            <div id="gallery1"></div>
                            <div id="gallery2"></div>
                        </div>
                        <div>
                            <div id="gallery3"></div>
                        </div>
                        <div>
                            <div id="gallery4"></div>
                            <div id="gallery5"></div>
                        </div>
                        <div>
                            <div id="gallery6"></div>
                            <div id="gallery7"></div>
                        </div>
                    </div>
                    <p>
                            ?????? ????????? ???????????? ????????? ???????????? ?????? <span className="green">????????? ??????</span> <br />
                            ????????? ????????? ???????????? ???????????? ???????????? ?????? <span className="green">????????? ??????</span>                            
                        </p>
                    <p>
                        ???????????? ??? ????????? ?????? <span className="green">????????? ?????????</span>?????? <br />
                        ???????????? ???????????????.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Landing;