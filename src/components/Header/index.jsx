import {Anchor} from './Anchor'
import {SearchBar} from './SearchBar'

import './styles.css'

export function Header({routes}){
    const {home, login, cart} = routes;
    return (
        <header className="header">
            <Anchor className="header__logo header__anchor" 
                    path={home.URI}
                    icon='/assets/logofull.png' 
                    alt="Logotipo da Deliverize"
            />
            <SearchBar />
            <Anchor className="header__anchor" 
                    path={login.URI}
                    icon='/assets/user.svg' 
                    name={login.description} />
            <Anchor className="header__anchor" 
                    path={cart.URI}
                    icon='/assets/cart.svg'
                    showBadge={true}
                    name={cart.description} />
        </header>
    );
}