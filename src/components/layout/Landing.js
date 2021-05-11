import mainImage from '../../images/mid.png';
import flower1 from '../../images/flowers/flower1.png'
import flower2 from '../../images/flowers/flower2.png'
import flower3 from '../../images/flowers/flower3.png'
import flower4 from '../../images/flowers/flower4.png'
import premium from '../../images/premium.png';
import event from '../../images/event.png';
import special from '../../images/special.png';
import Button from '../Button';

function Landing() {
    return(
        <div>
            <div id="landing">
                <div id="introduction">
                    <h1 className="introHeader">NATURAL <br /> AND SINCERE</h1>
                    <p>행복을 담은 도시락, 정성을 담은 도시락으로</p>
                    <p>고객의 건강과 만족을 높이겠습니다.</p>
                    <Button text="메뉴보기" type="primary" />
                    <Button text="전화주문" type="secondary" />
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
                        늘 신선하고 깨끗한 맛으로
                        <br /> 건강까지 채워드리겠습니다
                        </h1>
                        <div>
                            <p>
                                체육대회, 야유회, 학교MT, 직장인 점식 도시락등 <br />
                                각종 행사엔 누구나 좋아하는 한식 도시락
                            </p>
                            <p>
                                바쁜 하루에 밥이라도 제대로 먹었으면 하는 <span>엄마의 마음</span> <br />
                                뜨끈한 국물로 마음속의 추위까지 녹였으면 하는 <span>정담도시락의 마음</span>                            </p>
                            <p>
                                항상 정성을 담은 정담 도시락은 엄선된 식태료만을 사용하여 <br />
                                맛과 건강면에서 차병화된 한식 도시락입니다.
                            </p>
                            <p>
                                그마음을 한 그릇에 담아 <span>따듯한 도시락</span>으로 <br />
                                고객님을 찾아갑니다.
                            </p>
                        </div>
                        <Button text="자세히 보기" type="secondary" />
                    </div>
                    <div>
                        <div>
                            <img src={premium} draggable={false} alt="premium" />
                            <img src={event} draggable={false} alt="event" />
                            <img src={special} draggable={false} alt="special" />
                        </div>
                        <div>
                            <h3>명품메뉴</h3>
                            <h3>행사메뉴</h3>
                            <h3>스페셜메뉴</h3>
                        </div>
                    </div>
                </article>
                <svg width="1000" height="550" viewBox="0 0 1000 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="bgSvg">
                    <path d="M999.5 50V500C999.5 527.338 977.338 549.5 950 549.5H50C22.6619 549.5 0.5 527.338 0.5 500V50C0.5 22.6619 22.6619 0.5 50 0.5H697.222H950C977.338 0.5 999.5 22.6619 999.5 50Z" fill="#C4C4C4" stroke="#F1F1F1"/>
                </clipPath>
                </svg>
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
                    <p>행복을 담은 도시락, 정성을 담은 도시락으로</p>
                    <p>고객의 건강과 만족을 높이겠습니다.</p>
                    <Button text="자세히 보기" type="secondary" />
                </div>
            </div>
        </div>
    );
}

export default Landing;