function Card({ item }) {
    // Format prices on separate lines or with bullet separator
    let priceDisplay;
    if (item.price.length === 1) {
        priceDisplay = <h2>{item.price[0]}</h2>;
    } else {
        priceDisplay = (
            <div className="price-container">
                {item.price.map((price, index) => (
                    <h2 key={price}>{price}</h2>
                ))}
            </div>
        );
    }
    
    return(
        <div className="card">
            <div>
                <img src={require(`../../images/items/${item.img}`)} alt="item" />
            </div>
            <div>
                <h1>{item.name}</h1>
                {priceDisplay}
            </div>
        </div>
    );
}

export default Card;