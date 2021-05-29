import { Link } from 'react-router-dom';

function SecondaryButton({text, path}) {
    return(
        <Link to={"/"+path} className="secondaryButtonAnchor"><p className={'secondaryButton'}> {text} <i className="fas fa-arrow-right"></i></p></Link>
    );
}

export default SecondaryButton;