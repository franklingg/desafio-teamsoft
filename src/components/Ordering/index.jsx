import {Submit} from './Submit';
import {Additional} from './Additional';
import {SingleChoice} from './SingleChoice';
import './Ordering.css';

const fetchedOrder = [
    { "id": 1, "quantity": 3, "nm_item": "Queijo Cheddar", "vl_item": 4.99 },
    { "id": 2, "quantity": 1, "nm_item": "Cebola Crispy", "vl_item": 1.5 },
]

export function Ordering({productInfo}){
    const [extra, talher] = productInfo.ingredients;

    return(
        <div className="ordering">
            <div className="ordering__info">
                Adicionar ingredientes <br />
                <span className="ordering__ingredients">
                    Até {extra.max_itens} ingredientes
                </span>
            </div>
            {extra.itens.map((item=><Additional itemInfo={item} />))}
            <SingleChoice itemInfo={talher} />
            <Submit className="ordering" product={productInfo} order={fetchedOrder}/>
        </div>
    );
}