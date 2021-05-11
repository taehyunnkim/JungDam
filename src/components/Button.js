function Button({text, type, slide}) {
    return(
        <button className={'button ' + type + ' ' + slide}> {text} </button>

    );
}

export default Button;