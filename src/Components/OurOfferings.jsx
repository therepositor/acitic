import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const OurOfferings = () => {
    return (
        <div className='our-offerings'>
            <nav className='homenavbar'>
                <span>
                    <h3>Our Offerings</h3>     
                </span>     
            </nav>
            <section className="entrepreneurship-incubation">
                <div className='entrepreneurship-incubation-container'>
                    <h3>Entrepreneurship & Incubation</h3>
                    <span className='yellow-line'></span>
                </div>
                <div className='actic-will-container'>
                    <div className='rectangle-parent-container'>
                        <h3>The Acitc will :</h3>
                        <ul>
                            <li> 
                                <div>
                                    <FontAwesomeIcon className='check-circle' icon={faCheckCircle} /> 
                                </div>      
                                <p>Select startups and entrepreneurs</p>
                            </li>
                            <li>
                                <div>
                                    <FontAwesomeIcon className='check-circle' icon={faCheckCircle} />
                                </div>
                                <p>
                                    Take them through a rigorous incubation cycle that includes training, mentoring by experienced executives across multiple disciplines and industries.
                                </p>
                            </li>
                            <li>
                                <div>
                                    <FontAwesomeIcon  className='check-circle' icon={faCheckCircle} />
                                </div>
                                <p>
                                    Facilitate access to funding to qualified entities that have successfully completed the program have developed innovative business ideas.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='rectangle'></div>
                </div>
                
            </section>
            <section className="technical-assistance">

                <div className='technical-assistance-container'>
                    <h3>Technical Assistance</h3>
                    <span className="yellow-line"></span>
                </div>
                <div className='rectangle-parent-container'>
                    <div className="rectangle"></div>
                    <p>Technical assistance will be provided to local African Diaspora businesses to help them grow locally (with access to procurement) and expand globally. Access to help will be tailored based on an analysis of each business with focus on : Sales & marketing, Finances, Management, Technology, Competition, Investment and Competition.</p>
                </div>
            </section>
        </div>
    )
}

export default OurOfferings
