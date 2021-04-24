import {Order} from './pages/Order'
import {NotFound} from './pages/Error/NotFound'

export function Routes(){
    return {
        home:{
            URI:'/',
            description: '',
            page: Order
        },
        login:{
            URI:'/login',
            description: 'Entrar',
            page: NotFound
        },
        cart:{
            URI:'/cart',
            description: 'Carrinho',
            page: NotFound
        }
    };
}