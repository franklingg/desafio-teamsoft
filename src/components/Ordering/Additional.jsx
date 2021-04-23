import {PlusMinus} from './PlusMinus'

export function Additional({ itemInfo }){

    function formatPrice(value){
        let [intPart, fracPart] = value.toString().split('.');
        fracPart = fracPart.padEnd(2, "0");
        return (`R$${intPart},${fracPart}`);
    }

    return(
        <div className="additional">
            <div className="additional__title">{itemInfo.nm_item}</div>
            <PlusMinus className="additional__button" />
            <div className="additional__price">+ {formatPrice(itemInfo.vl_item)}</div>
            <hr className="additional__line" />
        </div>
    );
}