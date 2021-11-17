import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEnvelope, faMapMarkerAlt,  faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <section className="mailing-list">
                <form action="" method="post">
                    <label htmlFor="email">Join our mailing list</label>
                    <div className="input-container">
                        <input type="email" placeholder='Email' name="email" id="email" />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </section>
            <section className="footer-links">
                <div>
                    <h3>ACITC</h3>
                    <p>A place to be for fostering <br /> Entrepreneurs and building <br /> start-ups </p>
                </div>
                <div className='quick-links-container'>
                    <h4>Quick links</h4>
                    <ul className='quick-links'>
                        <li className="quicklink-items" key={uuidv4()}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="quicklink-items" key={uuidv4()}>
                            <Link to='/about us'>About Us</Link>
                        </li>
                        <li className="quicklink-items" key={uuidv4()}>
                            <Link to='/how it work'>How it work</Link>
                        </li>
                        <li className="quicklink-items" key={uuidv4()}>
                            <Link to='/blog'>Blogs</Link>
                        </li>
                        <li className="quicklink-items" key={uuidv4()}>
                            <Link to='/frequently'>Frequently asked questions</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <ul className="contact-links">
                        <li className="contactlink-item" key={uuidv4()}>
                           <div>
                               <FontAwesomeIcon icon={faEnvelope} />
                           </div>
                           <div>
                                <a href="mailto: info@acitc.org">Info@acitc.org</a>
                           </div> 
                        </li>
                        <li className="contactlink-item" key={uuidv4()}>
                          <div>
                              <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div> 
                          <div>
                            9<sup>th</sup> Floor <br />
                                Eko Innovation Center <br />
                                Ikoyi, Lagos State, <br />
                                Nigeria
                          </div> 
                        </li>
                        <li className="contactlink-item" key={uuidv4()}>
                           <span>
                               <FontAwesomeIcon icon={faPhoneAlt} />
                           </span>
                           <span>09066444765</span> 
                        </li>
                    </ul>
                </div>
                <div className='chat'>
                    <h4>Let's connect</h4>
                    <p>Do you have a question or need <br /> more information?  <a href="mailto: info@acitc.org">Let's chat</a></p>
                    <div className="socials">
                        <a rel='noopener noreferer' style={{color: '#4267B2', marginRight: '32px' , fontSize: '24px'}} href="https://facebook.com/acitc" target="_" >
                            <FontAwesomeIcon icon={faFacebook} />      
                        </a>
                        <a rel='noopener noreferer' style={{color: '#0e76a8', marginRight: '32px' , fontSize: '24px'}} href="https://linkedin/in/acitc" target='blank' >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a rel='noopener noreferer' style={{color: '#1da1f2', marginRight: '32px' , fontSize: '24px'}} href="https://twitter/acitc" target='blank'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>         
            </section>
            <div className="copyright">
                    <p>ACITC 2021. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
