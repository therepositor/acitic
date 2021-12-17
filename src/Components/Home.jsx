import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faMoneyCheckAlt, faSearch, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Home = () => {
    
    return (
        <div className='home'>
            <section className="banner">
                    <ImageSlider slides={SliderData} />
                    
                    {/* <div className="dots-container">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>     */}
            </section>
            <article className='how-acitc-work'>
                <h4>How Does ACITC Work?</h4>
                <p>We provide training, mentoring, access to funding and technical assistance to the Black and <br /> Brown communities closing the entire gaps around education, use of technology and <br />entrepreneurship.</p>
            </article>
            <section className='entrepreneurs-and-startups'>
                <div className="entrepreneurs-and-startup-container">
                    <h4>For Entrepreneurs and <br />Startups</h4>
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
                                    <FontAwesomeIcon icon={faSyncAlt} />
                                </span>
                                <span><h5>Incubation Cycle</h5></span>
                            </div>      
                            <p>Taken through a rigorous incubation cycle which includes <br />training and mentoring by expereienced executives across <br/>multiple disciplines and industries</p>
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
                        <li key={uuidv4()}>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faCogs} />
                                </span>
                                <span><h5>Technical Assistance</h5></span>
                            </div>
                            <p>Provision of technical assistance to local African <br />diaspora businesses to help them grow locally </p>
                        </li>
                    </ul>
                </div>
                <div className="entrepreneurs-and-startup-image-container">
                    <img src='images/for_entrepreneurs.jpg' alt="entrepreneurship business opportunity meeting" />
                    <Link className='cta-link register' to='/get_started'>Register</Link>
                </div>
            </section>
            <section className="stages">
                <div className="cards">
                    <div className="card">
                        <h3>Idea Stage</h3>
                        <p>Are you an aspiring entrepreneur with amazing business ideas?</p>
                        <p>Have a look at our amazing programs planned for you.</p>
                        <Link to='/idea-stage'>Read More</Link>
                    </div>
                    <div className="card">
                        <h3>Building Stage</h3>
                        <p>Do you have a startup or run a business successfully for a couple of years and thiking of the next step?</p>
                        <p></p>
                        <Link to='/build-stage'>Read More</Link>
                    </div>
                </div>    
                <h4>Our Entrepreneurship & Incubation Partners</h4>
                <div className='partners'>
                    <img src="images/temple_university.jpg" alt="temple university" />
                    <img src="images/usciences.jpg" alt="university of the sciences" />
                    <img src="images/penn.jpg" alt="penn university" />
                    <img src="images/comm_college_of_phill.jpg" alt="community college of philadephia" />
                    <img src="images/drexler.jpg" alt="drexler university" />
                </div>
                <div className='load-more-link'>
                    <Link to='lead more' className='cta-link load-more'>Load More</Link>
                </div>   
            </section>
            <section className="testimonials">
                <h3>What Entrepreneurs are saying</h3>
                <div className="cards">
                    <div className="card card1">
                        <div className="sub-card sub-card1">
                            <p>ACITC is the place to be, the <br />mentorship with a difference.
                            <br />Mary James <br />Ceo, <br />StartupBooks</p>
                        </div>
                    </div>
                    <div className="card card2">
                        <div className="sub-card sub-card2">
                            <p>ACITC is the place to be, the <br />mentorship with a difference.
                                <br />Mary James <br />Ceo, <br />StartupBooks</p>
                        </div>
                    </div>
                    <div className="card card3">
                        <div className="sub-card sub-card3">
                            <p>ACITC is the place to be, the <br />mentorship with a difference.
                                <br />Mary James <br />Ceo, <br />StartupBooks</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
