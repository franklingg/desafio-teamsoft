 import './Error.css'

export function NotFound(){
    return(
        <main className="notFound">
            <div className="notFound__content">
                <img className="notFound__image" src="assets/404.svg" alt="Ilustração para o erro 404" />
                <section className="notFound__message">
                    <h1>Ei! Por aqui não!</h1>
                    <h3>
                       Esta página ainda não foi implementada. <br />
                       Aguarde que o Deliverize trará novas    <br />
                       funcionalidades em breve!               <br />
                    </h3>
                </section>
            </div>
            <footer className="notFound__footer">
                <a href="#top" className="notFound__logo">
                    <img src="assets/logo.svg" alt="Logotipo da Deliverize" />
                </a>
                <ul className="notFound__links">
                    <li><a href="#top">Sobre nós</a></li>
                    <li><a href="#top">Serviços</a></li>
                    <li><a href="#top">Contato</a></li>
                </ul>
                <p className="notFound__copyright">© Deliverize, 2021</p>
            </footer>
        </main>
    );
}