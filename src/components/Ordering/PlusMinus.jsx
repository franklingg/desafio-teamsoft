import {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export function PlusMinus({className}){
    const [count, setCount] = useState(null);

    function anyAction(){
        return count !== null;
    }

    function increment(){setCount(count+1);}
    function decrement(){
        setCount(count !== 0 ? count-1 : 0);
    }

    return(
        anyAction() ?
        <div className={className}>
            <button className={`${className}--minus`} onClick={decrement}><RemoveIcon /></button>
            <input className={`${className}--input`} onChange={()=>{setCount(count)}} value={count} />
            <button className={`${className}--plus`} onClick={increment}><AddIcon /></button>
        </div> :
        <div className={className + ` ${className}--single`}>
            <button className={`${className}--plus`} onClick={increment}><AddIcon /></button>
        </div>
        )
}