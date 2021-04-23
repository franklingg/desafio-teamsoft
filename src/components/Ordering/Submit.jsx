import {Popover} from '@material-ui/core'
import {PlusMinus} from './PlusMinus';
import {useState} from 'react';

export function Submit({order, className, product}){
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        // Optional - To make it close automatically after 5sec
        //setTimeout(handleClose, 5000);
    }
    const handleClose = () => setOpen(false);

    return(
        <div className={`${className}__submit`}>
            <PlusMinus className={`${className}__quantity`} initial={1} />
            <button className={`${className}__submit--btn`} onClick={handleClick}>Adicionar</button>
            <Popover className={`${className}__popover`} anchorReference="anchorPosition" open={open} 
                onClose={handleClose} anchorPosition={{top:0, left: 1000 }}
            >
                <div className={`${className}__popover-header`} >Adicionado com Sucesso</div>
                <h1 className={`${className}__popover-title`} >{product.nm_product}</h1>
                <span className={`${className}__popover-ingredients--title`} >Ingredientes:</span>
                <ul className={`${className}__popover-ingredients`} >
                    {order.map((item)=> <li className={`${className}__popover-ingredients--item`} >
                                            {`${item.quantity} ${item.nm_item}`}
                                        </li>
                    )}
                </ul>
            </Popover>
        </div>
    );
}