import Card from './Card';

function CardList({id, items, title, description, kicker}) {
    let cards = [];
    items.forEach((item, index) => {
        cards.push(<Card item={item} key={index} />)
    });

    let descriptions = [];
    if(description) {
        for(let i = 0; i < description.length; i++) {
            descriptions.push(<p key={i}>{description[i]}</p>);
        }
    }

    return(
        <div id={id} className="menuContainer">
            <div className="sectionHeader">
                {kicker && <span className="kicker">{kicker}</span>}
                <h1>{title}</h1>
                {descriptions}
                <div className="accent"></div>
            </div>
            <div className="cardList">
                {cards}
            </div>
        </div>
    );
}

export default CardList;