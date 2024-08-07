import './SelectionItem.css'

function SelectionItem(props){
    return(
        <button className='mybut'>
            <h>{props.SelectionName}</h>
        </button>
    );
}

export default SelectionItem;