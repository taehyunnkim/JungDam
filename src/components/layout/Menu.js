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
import CardList from './CardList';
import '../../scss/Menu.scss';

function Menu() {
    return(
        <div className="container">
            <CardList items={premium} title="명품메뉴" description={["국 샐러드 홍삼드링크 김 제공"]} />
            <CardList items={special} title="스페셜메뉴" description={["국 델몬트쥬스 김 제공"]} />
            <CardList items={full} title="알찬메뉴" description={["김 제공"]} />
            <CardList items={silsok} title="실속메뉴" />
            <CardList items={japanese} title="일품메뉴" />
            <CardList items={event} title="행사메뉴" />
            <CardList items={lunch} title="정기식단메뉴" description={["주, 월별 계약 5개 이상", "주, 월단위 식단표에 의해반찬구성이 매일 변경되어 제공됨"]} />
            <CardList items={western} title="맞춤양식메뉴" />
            <CardList items={korean} title="맞춤한식메뉴" />
            <CardList items={kid} title="어린이메뉴" />
            <CardList items={hike} title="등산메뉴" />
            <CardList items={snacks} title="간식메뉴"/>
        </div>
    );
}

export default Menu;