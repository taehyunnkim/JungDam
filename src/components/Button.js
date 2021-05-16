import { Link } from 'react-router-dom';

function Button({text, type, slide, path}) {
    return(
        <Link to={"/"+path}><button className={'button ' + type + ' ' + slide}> {text} </button></Link>

    );
}

export default Button;