import '../../scss/Patterns.scss';

function DottedSquare({color, id}) {
    return(
        <div id={id} className={"dottedSquare " + color}></div>
    );
}

export default DottedSquare;