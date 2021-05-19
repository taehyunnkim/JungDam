import Card from './Card';

function CardList({items, title, description}) {
    let cards = [];
    items.forEach(item => {
        cards.push(<Card item={item} key={Math.random(100000)} />)
    });

    let numHidden = items.length % 4 !== 0 ? 4 - (items.length % 4) : items.length % 4;
    let ele = [];
    for(let i = 0; i < numHidden; i++) {
        ele.push(<div className="card hidden" key={Math.random(100000)}></div>);
    }

    let descriptions = [];
    if(description) {
        for(let i = 0; i < description.length; i++) {
            descriptions.push(<p key={Math.random(100000)}>{description[i]}</p>);
        }
    }


    return(
        <div className="menuContainer">
            <div>
                <h1>{title}</h1>
                {descriptions}
                <div></div>
            </div>
            <div className="cardList">
                {cards}
                {ele}
            </div>
        </div>
    );
}

export default CardList;