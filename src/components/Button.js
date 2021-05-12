function Button({text, type, slide, setPage, path}) {
    return(
        <button className={'button ' + type + ' ' + slide} onClick={()=>{setPage(path)}}> {text} </button>

    );
}

export default Button;