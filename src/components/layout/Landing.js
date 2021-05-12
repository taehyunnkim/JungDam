import { useState, useEffect } from 'react';

import mainImage from '../../images/mid.png';
import flower1 from '../../images/flowers/flower1.png'
import flower2 from '../../images/flowers/flower2.png'
import flower3 from '../../images/flowers/flower3.png'
import flower4 from '../../images/flowers/flower4.png'
import premium from '../../images/premium.png';
import event from '../../images/event.png';
import special from '../../images/special.png';
import Button from '../Button';
import TeleButton from '../TeleButton';

function Landing({ setPage }) {
    const [fade, setFade] = useState('hidden');
    const [slide, setSlide] = useState('up');
    useEffect(() => {
        setFade('visible');
        setSlide('ogPos');
    },[]);

    return(
        <div>
            <div id="landing">
                <div id="introduction" className={fade}>
                    <h1 className="introHeader">NATURAL <br /> AND SINCERE</h1>
                    <p><span>행복</span>을 담은 도시락, <span>정성</span>을 담은 도시락으로</p>
                    <p>건강과 행복을 드리겠습니다</p>
                    <Button text="메뉴보기" type="primary" slide={slide} setPage={setPage} path='menu' />
                    <TeleButton text="전화주문" type="secondary" slide={slide} />
                </div>
                <div id="landing-image">
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

            <div id="menu-introduction">
                <div id="top-circle" className="circle"></div>
                <div id="bottom-circle" className="circle"></div>
                <article>
                    <div>
                        <h1>
                        늘 신선하고 정성이 담긴 맛으로
                        <br /> 건강까지 채워드리겠습니다
                        </h1>
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
                                    바쁜 하루에 밥이라도 제대로 먹었으면 하는 <span>엄마의 마음</span> <br />
                                    뜨끈한 국물로 마음속의 추위까지 녹였으면 하는 <span>정담도시락의 마음</span>                            
                                </p>
                                <p>
                                    그마음을 한 그릇에 담아 <span>따듯한 도시락</span>으로 <br />
                                    고객님을 찾아갑니다.
                                </p>
                            </div>
                        </div>
                        <Button text="자세히 보기" type="secondary" setPage={setPage} path='menu' />
                    </div>
                    <div>
                        <div>
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
                        </div>
                    </div>
                </article>
            </div>

            <div id="gallery-introduction">
                <div>
                    <div id="gallery1"></div>
                    <div id="gallery2"></div>
                    <div id="gallery3"></div>
                    <div id="gallery4"></div>
                </div>
                <div>
                    <h1 className="introHeader">GALLERY</h1>
                    <p><span>행복</span>을 담은 도시락, <span>정성</span>을 담은 도시락으로</p>
                    <p>건강과 행복을 드리겠습니다</p>
                    <Button text="자세히 보기" type="secondary" setPage={setPage} path='gallery' />
                </div>
            </div>
        </div>
    );
}

export default Landing;