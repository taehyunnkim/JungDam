import Card from './Card';

function CardList({id, items, title, description}) {
    let cards = [];
    items.forEach(item => {
        cards.push(<Card item={item} key={Math.random(100000)} />)
    });

    let descriptions = [];
    if(description) {
        for(let i = 0; i < description.length; i++) {
            descriptions.push(<p key={Math.random(100000)}>{description[i]}</p>);
        }
    }

    return(
        <div id={id} className="menuContainer">
            <div>
                <h1>{title}</h1>
                {descriptions}
                <div></div>
            </div>
            <div className="cardList">
                {cards}
            </div>
        </div>
    );
}

export default CardList;