import './Info.css'
import avatar from '../../assets/avatar-jessica.jpeg'

function Info(){
    return(
        <div id='infodiv'>
            <img id='avatar' src={avatar}/>
            <div id='nameandloc'>
                <h id='name'>Jessica Randall</h>
                <h id='location'>London, United Kingdom</h>
            </div>
            <p id='title'> "Front-end developer and avid reader."</p>
        </div>
    )
}

export default Info