function Card({ item }) {
    let prices = item.price.map((price) => {
        return <h2 key={price}>{price}</h2>
    });
    return(
        <div className="invisiCard">
            <div className="card">
                <div>
                    <img src={require(`../../images/items/${item.img}`)} alt="item" />
                </div>
                <div>
                    <div>
                        <h1>{item.name}</h1>
                        {prices}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;