function Card({ item }) {
    return(
        <div className="invisiCard">
            <div className="card">
                <div>
                    <img src={require(`../../images/items/${item.img}`).default} alt="item" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2>{item.price[0]}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;