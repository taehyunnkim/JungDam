import premium from '../../assets/premium.json';
import special from '../../assets/special.json';
import full from '../../assets/full.json';
import silsok from '../../assets/silsok.json';
import japanese from '../../assets/japanese.json';
import event from '../../assets/event.json';
import lunch from '../../assets/lunch.json';
import western from '../../assets/western.json';
import korean from '../../assets/korean.json';
import kid from '../../assets/kid.json';
import hike from '../../assets/hike.json';
import snacks from '../../assets/snacks.json';
// import banchan from '../../images/items/Edits/banchan.png';
import CardList from './CardList';
import '../../scss/Menu.scss';
import { useEffect } from 'react';

function Menu({setPage, menu}) {
    useEffect(() => {
        setPage("menu");
        window.scrollTo(0, 0);
    }, [setPage]);

    let menuItems = "";
    if(menu === "premium") {
        menuItems = <CardList id="premium" items={premium} title="명품메뉴" description={["국 람부탄 홍삼드링크 김 제공"]} />
    } else if(menu === "special") {
        menuItems = <CardList id="special" items={special} title="스페셜메뉴" description={["국 델몬트쥬스 김 제공"]} />
    } else if(menu === "alchan") {
        menuItems = <CardList id="alchan" items={full} title="알찬메뉴" description={["김 제공"]} />
    } else if(menu === "silsok") {
        menuItems = <CardList id="silsok" items={silsok} title="실속메뉴" />
    } else if(menu === "japanese") {
        menuItems = <CardList id="japanese" items={japanese} title="일품메뉴" />
    } else if(menu === "event") {
        menuItems = <CardList id="event" items={event} title="행사메뉴" />
    } else if(menu === "lunch") {
        menuItems = <CardList id="lunch" items={lunch} title="정기식단메뉴" description={["주, 월별 계약 5개 이상", "주, 월단위 식단표에 의해 반찬구성이 매일 변경되어 제공됨"]} />
    } else if(menu === "western") {
        menuItems = <CardList id="western" items={western} title="맞춤양식메뉴" />
    } else if(menu === "korean") {
        menuItems = <CardList id="korean" items={korean} title="맞춤한식메뉴" />
    } else if(menu === "kids") {
        menuItems = <CardList id="kids" items={kid} title="어린이메뉴" />
    } else if(menu === "hike") {
        menuItems = <CardList id="hike" items={hike} title="등산메뉴" />
    } else if(menu === "snacks") {
        menuItems = <CardList id="snacks" items={snacks} title="간식메뉴"/>
    } 

    return(
        <div>  
            <div className="spacing">
            </div>
            <div id="menu-start" className="container">
                {menuItems}
                {/* <CardList id="premium" items={premium} title="명품메뉴" description={["국 람부탄 홍삼드링크 김 제공"]} />
                <CardList id="special" items={special} title="스페셜메뉴" description={["국 델몬트쥬스 김 제공"]} />
                <CardList id="alchan" items={full} title="알찬메뉴" description={["김 제공"]} />
                <CardList id="silsok" items={silsok} title="실속메뉴" />
                <CardList id="japanese" items={japanese} title="일품메뉴" />
                <CardList id="event" items={event} title="행사메뉴" />
                <CardList id="lunch" items={lunch} title="정기식단메뉴" description={["주, 월별 계약 5개 이상", "주, 월단위 식단표에 의해 반찬구성이 매일 변경되어 제공됨"]} />
                <CardList id="western" items={western} title="맞춤양식메뉴" />
                <CardList id="korean" items={korean} title="맞춤한식메뉴" />
                <CardList id="kids" items={kid} title="어린이메뉴" />
                <CardList id="hike" items={hike} title="등산메뉴" />
                <CardList id="snacks" items={snacks} title="간식메뉴"/> */}
            </div>
        </div>
    );
}

export default Menu;