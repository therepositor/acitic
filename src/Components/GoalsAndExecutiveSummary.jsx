import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const GoalsAndExecutiveSummary = () => {
    return (
        <div className='goals-and-executive-summary'>
            <nav className='homenavbar'>
                <span>
                    <h3>About Us</h3>     
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Goals & Executive Summary
                </span>   
             </nav>
             <section className="our-goals">
                 <h3>Our Goals</h3>
                 <span className='yellow-line'></span>
                 <ul>
                     <li key={uuidv4()}>
                         <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                     <li key={uuidv4()}>
                     <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                     <li key={uuidv4()}>
                        <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                     <li key={uuidv4()}>
                        <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                     <li key={uuidv4()}>
                        <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                     <li key={uuidv4()}>
                        <span>
                             <FontAwesomeIcon icon={faCheckCircle} />
                        </span>
                        <span>
                            Lorem ipsum dolor
                        </span>
                     </li>
                 </ul>
             </section>
             <div className="executive-summary">
                 <h3>Executive Summary</h3>
                 <span className='yellow-line'></span>
                 <p>The African and Caribbean Innovation and Technology center (ACITC) will be constructed in Africa Town. It will provide training, mentoring, access to funding and technical assistance to the black and brown community to close the existing gaps around education, use of technology and entrepreneurship. The ACITC will operate in collaboration with the public and private sectors. It will provide state-of-the-art communication, technology and engineering equipment that will facilitate trade and business transactions around the world, especially Africa and the caribbean. The goal is to link black, brown and other businesses to the international market. The ACITC will collaborate with other technology effort in Philadephia that seek to eliminate the divide between black and brown youth.</p>
             </div>
        </div>
    )
}

export default GoalsAndExecutiveSummary
