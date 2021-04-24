import {Link} from 'react-router-dom'
import {Badge, withStyles} from '@material-ui/core';

const DeliverizeBadge = withStyles(() => ({ 
    badge: { 
        backgroundColor: 'var(--yellow-tangerine)', 
        color: 'white'} 
}))(Badge);

export function Anchor (props) {
    const showBadge = props.showBadge || false;
    return(
        <Link className={props.className} to={props.path}>
            <DeliverizeBadge className="header__badge" badgeContent={2} invisible={!showBadge}>
                <img className="header__anchorLogo" src={props.icon} alt={props.alt || props.name} />
            </DeliverizeBadge>
            <span class="header__anchorName">{props.name}</span>
        </Link>
    );
}