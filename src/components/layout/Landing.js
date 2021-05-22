import { useState, useEffect } from 'react';

import mainImage from '../../images/main_alt.png';
import flower1 from '../../images/flowers/flower1.png';
import flower2 from '../../images/flowers/flower2.png';
import flower3 from '../../images/flowers/flower3.png';
import flower4 from '../../images/flowers/flower4.png';
import premium from '../../images/premium_2.png';
import event from '../../images/event_2.png';
import special from '../../images/special_2.png';
import Button from '../Button';
import TeleButton from '../TeleButton';

function Landing({ setPage }) {
    const [fade, setFade] = useState('hidden');
    const [slide, setSlide] = useState('up');
    useEffect(() => {
        setFade('visible');
        setSlide('ogPos');
        setPage("home");
    },[setFade, setPage]);

    return(
        <div>
            <div className="container first">
                <div id="landing">
                    <div id="introduction" className={fade}>
                        <h1 className="introHeader">NATURAL <br /> AND SINCERE</h1>
                        <p>행복을 담은 도시락, 정성을 담은 도시락으로</p>
                        <p>건강과 행복을 드리겠습니다</p>
                        <Button text="메뉴보기" type="primary" slide={slide} path='menu' />
                        <TeleButton text="전화주문" type="secondary" slide={slide} />
                        <h2>ORDER 051-782-3630</h2>
                    </div>
                    <div id="landing-image" className={fade}>
                        <img src={mainImage} draggable={false} alt="JungDam" />
                    </div>
                    <div id="filler"></div>
                </div>
                <div id="flowers">
                    <img src={flower1} draggable={false} alt="flower1" />
                    <img src={flower2} draggable={false} alt="flower2" />
                    <img src={flower3} draggable={false} alt="flower3" />
                    <img src={flower4} draggable={false} alt="flower4" />
                </div>
            </div>
            <div id="menu-wrapper">
                <div id="bottom-circle-two" className="circle"></div>
                <div id="bottom-circle" className="circle"></div>
                <div className="menuCards">
                    <div>
                        <div className="menuCard">
                            <div>
                                <img src={premium} alt="premium" />
                                <h1>명품 메뉴</h1>
                            </div>
                            <div>
                                <img src={event} alt="event" />
                                <h1>행사 메뉴</h1>
                            </div>
                            <div>
                                <img src={special} alt="special" />
                                <h1>스페셜 메뉴</h1>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="menuCard">
                            <img src={premium} alt="premium" />
                            <h1>명품 메뉴</h1>
                        </div>
                    </div>
                    <div>
                        <div className="menuCard">
                            <img src={event} alt="event" />
                            <h1>행사 메뉴</h1>
                        </div>
                    </div>
                    <div>
                        <div className="menuCard">
                            <img src={special} alt="special" />
                            <h1>스페셜 메뉴</h1>
                        </div>
                    </div>
                </div>
                <div id="menu-introduction">
                    <div id="top-circle" className="circle"></div>
                    <article>
                        <div>
                            <h1 className="smHeader">MENU INTRODUCTION</h1>
                            <h2>
                            늘 신선하고 정성이 담긴 맛으로
                            <br /> 건강까지 채워드리겠습니다
                            </h2>
                            <div>
                                <div>
                                    <p>
                                        체육대회, 야유회, 학교MT, 직장인 점식 도시락등 <br />
                                        각종 행사엔 누구나 좋아하는 한식 도시락
                                    </p>
                                    <p>
                                        항상 정성을 담은 정담 도시락은 엄선된 식태료만을 사용하여 <br />
                                        맛과 건강면에서 차병화된 한식 도시락입니다.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        바쁜 하루에 밥이라도 제대로 먹었으면 하는 <span className="brown">엄마의 마음</span> <br />
                                        뜨끈한 국물로 마음속의 추위까지 녹였으면 하는 <span className="brown">정담도시락의 마음</span>                            
                                    </p>
                                    <p>
                                        그마음을 한 그릇에 담아 <span className="brown">따듯한 도시락</span>으로 <br />
                                        고객님을 찾아갑니다.
                                    </p>
                                </div>
                            </div>
                            <Button text="자세히 보기" type="primary" path='menu' />
                        </div>
                        <div>
                            {/* <div>
                                <img src={premium} draggable={false} alt="premium" />
                                <h3>명품메뉴</h3>
                            </div>
                            <div>
                                <img src={event} draggable={false} alt="event" />
                                <h3>행사메뉴</h3>
                            </div>
                            <div>
                                <img src={special} draggable={false} alt="special" />
                                <h3>스페셜메뉴</h3>
                            </div> */}
                        </div>
                    </article>
                </div>
            </div>
            <div className="container">
                <div id="gallery-introduction">
                    <div>
                        <div id="gallery1"></div>
                        <div id="gallery2"></div>
                        <div id="gallery3"></div>
                        <div id="gallery4"></div>
                    </div>
                    <div>
                        <h1 className="smHeader">GALLERY INTRODUCTION</h1>
                        <h2>
                        청결한 위생으로 안전한 
                        <br /> 먹거리를 제공하겠습니다.
                        </h2>

                        <p>정담도시락은 <span>좋은 재료</span>만 담아 자연의 에너지를 전합니다.</p>
                        <p>정담도시락에는 <span>건강한 삷</span>과 <span>행복한 미래</span>가 있습니다.</p>
                        <Button text="자세히 보기" type="primary" path='gallery' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;