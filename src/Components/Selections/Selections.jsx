import './Selections.css'
import SelectionItem from '../../Components/SelectionItem/SelectionItem'

function Selections(){
    return(
        <div id='selectiondiv'>
            <SelectionItem SelectionName = 'GitHub'></SelectionItem>
            <SelectionItem SelectionName = 'Frontend Mentor'></SelectionItem>
            <SelectionItem SelectionName = 'LinkedIn'></SelectionItem>
            <SelectionItem SelectionName = 'Twitter'></SelectionItem>
            <SelectionItem SelectionName = 'Instagram'></SelectionItem>

        </div>
    )
}

export default Selections