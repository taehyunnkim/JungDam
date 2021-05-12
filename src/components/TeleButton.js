function Button({text, type, slide, setPage, path}) {
    return(
        <button className={'button ' + type + ' ' + slide} onClick={(e) => {
            e.preventDefault();
            document.location.href='tel: 051-782-3630'
            }}> {text} </button>

    );
}

export default Button;