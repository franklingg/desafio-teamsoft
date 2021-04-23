import Checkbox from '@material-ui/core/Checkbox';

export function SingleChoice({itemInfo}){

    return(
        <div className="singleChoice">
            {itemInfo.group}
            <Checkbox className="singleChoice__box"/>
        </div>
    );
}