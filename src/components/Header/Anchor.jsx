import {Link} from 'react-router-dom'

export function Anchor (props) {
    return(
        <Link className={props.className} to={props.path}>
            <img src={props.icon} alt={props.alt || props.name} />
            <span>{props.name}</span>
        </Link>
    );
}