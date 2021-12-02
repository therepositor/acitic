
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const HomeNavBar = () => {
    
    return (
        <nav className='homenavbar'>
            <span>
                <h3>Home</h3>     
            </span>
            <span>
                <FontAwesomeIcon icon={faAngleRight} />
            </span>
            <span>
                Idea Stage
            </span>   
        </nav>
    )
}

export default HomeNavBar
