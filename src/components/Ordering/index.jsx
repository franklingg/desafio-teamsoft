
import {Additional} from './Additional';
import {SingleChoice} from './SingleChoice';
import {PlusMinus} from './PlusMinus';
import './styles.css';

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
            <div className="ordering__submit">
                <PlusMinus className="ordering__quantity" initial={1} />
                <button className="ordering__submit--btn">Adicionar</button>
            </div>
        </div>
    );
}