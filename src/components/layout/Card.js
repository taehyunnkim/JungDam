function Card({ item }) {
    return(
        <div className="card" key={Math.random(100000)}>
            <div>
                <img src={require(`../../images/items/${item.img}`).default} alt="item" />
            </div>
            <div>
                <h1>{item.name}</h1>
                <h2>{item.price[0]}</h2>
            </div>
        </div>
    );
}

export default Card;