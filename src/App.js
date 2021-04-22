import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Header} from './components/Header'
import {NotImplemented} from './pages/NotImplemented'
import './global.css'

export function App(){
    return(
        <>
        <Router>
            <Header />
            <main>
                <Route path='/login' component={NotImplemented}></Route>
                <Route path='/cart' component={NotImplemented}></Route>
            </main>
        </Router>
        </>
    );
}