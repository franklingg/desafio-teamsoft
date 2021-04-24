import {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export function PlusMinus({className, initial, min=0}){
    const [count, setCount] = useState(initial || null);

    function anyAction(){ return count !== null; }
    function increment(){ setCount(count+1); }
    function decrement(){ setCount(count !== min ? count-1 : 0); }
    function userTyped(event){
        !isNaN(event.target.value) && setCount(+event.target.value);
     }

    return(
        anyAction() ?
        <div className={className}>
            <button className={`${className}--minus`} onClick={decrement}><RemoveIcon /></button>
            <input type="number" className={`${className}--input`} onChange={userTyped} value={count} />
            <button className={`${className}--plus`} onClick={increment}><AddIcon /></button>
        </div> :
        <div className={className + ` ${className}--single`}>
            <button className={`${className}--plus`} onClick={increment}><AddIcon /></button>
        </div>
        )
}