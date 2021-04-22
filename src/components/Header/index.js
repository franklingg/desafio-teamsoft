import {Anchor} from './Anchor'
import {SearchBar} from './SearchBar'

import './styles.css'

export function Header(){
    return (
        <header className="headerContainer">
            <Anchor className="headerLogo headerAnchor" 
                    path='/'
                    icon='/assets/logofull.png' 
                    alt="Logotipo da Deliverize"
            />
            <SearchBar />
            <Anchor className="headerAnchor" 
                    path='/login'
                    icon='/assets/user.png' 
                    name='Entrar' />
            <Anchor className="headerAnchor" 
                    path='/cart'
                    icon='/assets/cart.png' 
                    name='Carrinho' />
        </header>
    );
}