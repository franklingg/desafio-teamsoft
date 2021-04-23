
import {Additional} from './Additional';
import './styles.css';

export function Ordering({productInfo}){
    const [extra, talher] = productInfo.ingredients;
    return(
        <div className="ordering">
            <div className="ordering__ingredients">
                Adicionar ingredientes <br />
                <span className="ordering__ingredients--info">
                    Até {extra.max_itens} ingredientes
                </span>
            </div>
            {extra.itens.map((item=><Additional itemInfo={item} />))}
        </div>
    );
}