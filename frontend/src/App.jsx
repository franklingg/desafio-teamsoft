import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header} from './components/Header'
import {Routes} from './Routes'
import './global.css'

const routes = Routes();

export function App(){
    return(
        <>
        <Router>
            <Header routes={routes} />
            <Switch>
                <Route exact path={routes.home.URI} component={routes.home.page}></Route>
                <Route path={routes.login.URI} component={routes.login.page}></Route>
                <Route path={routes.cart.URI} component={routes.cart.page}></Route>
            </Switch>
        </Router>
        </>
    );
}