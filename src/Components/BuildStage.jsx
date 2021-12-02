import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMoneyCheckAlt, faCogs, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Relateditems from './Relateditems';


const BuildStage = () => {
    return (
        <div className='build-stage'>
             <nav className='homenavbar'>
                <span>
                    <h3>Home</h3>     
                </span>
                <span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
                <span>
                    Building Stage
                </span>
            </nav>
            <section className='entrepreneurs-and-startups'>
                <div className="entrepreneurs-and-startup-container">
                    <h4>Do you have a startup or run a business successfully for a couple of years and thinking of the next step.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Veniam sed amet qui maxime minus. Est quos minus <br />labore sed commodi ipsam, maiores totam nihil?<br /> Eveniet repudiandae atque vero veniam quia.</p>
                    <ul className='startups-options'>
                        <li key={uuidv4()}>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faSearch} /> 
                                </span>
                                <span><h5>Selection</h5></span>
                            </div>                 
                            <p>Startups and entrepreneurs will be selected <br /> after application</p>
                        </li> 
                        <li key={uuidv4()}>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faCogs} />
                                </span>
                                <span><h5>Technical Assistance</h5></span>
                            </div>
                            <p>Provision of technical assistance to local African <br />diaspora businesses to help them grow locally </p>
                        </li>
                        <li key={uuidv4()}>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} />
                                </span>
                                <span><h5>Access to Funding</h5></span> 
                            </div>     
                            <p>Facilitate access to funding to qualified entities that <br />have successfully completed the program</p>
                        </li>
                    </ul>
                </div>
                <div className="entrepreneurs-and-startup-image-container">
                    <img src='images/for_entrepreneurs.jpg' alt="entrepreneurship business opportunity meeting" />
                    <Link className='cta-link register' to='/build_stage_questionnaire'>Register</Link>
                </div>
            </section>
            <Relateditems />
        </div>
    )
}

export default BuildStage
