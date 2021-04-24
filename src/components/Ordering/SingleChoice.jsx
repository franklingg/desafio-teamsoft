import {useState} from 'react';
import Radio from '@material-ui/core/Radio';

export function SingleChoice({itemInfo}){
    const [choice, setChoice] = useState(false);

    const handleChange = (event)=>setChoice(event.target.value==="sim");
    
    return(
        <div className="singleChoice">
            <span className="singleChoice__description">{itemInfo.group}</span>
            <span className="singleChoice__option">
                Sim
                <Radio checked={choice} color="default" value="sim" name="yes" onChange={handleChange} />
            </span>
            <span className="singleChoice__option">
                Não
                <Radio checked={!choice} color="default" value="nao" name="no" onChange={handleChange} />
            </span>
        </div>
    );
}