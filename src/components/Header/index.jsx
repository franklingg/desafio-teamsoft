import {Anchor} from './Anchor'
import {SearchBar} from './SearchBar'
import './styles.css'

export function Header(){
    return (
        <header className="headerContainer">
            <div id="headerLogo">
                <img src="/assets/icon.png" alt="Ícone da Deliverize"/>
                <img src="/assets/logo.png" alt="Logotipo da Deliverize"/>
            </div>
            <SearchBar />
            <Anchor link='/login' path='/assets/user.png' name='Entrar' />
            <Anchor link='/cart' path='/assets/cart.png' name='Carrinho' />
        </header>
    );
}