import React from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


const ContactBanner = () => {
    return (
        <div className='contact-banner'>
            <ul className='contact-banner-contacts'>
                <li key={uuidv4()} className="listitem">
                    <span>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <span>+234 708 234 444 2</span>
                </li>
                <li key={uuidv4()} className="listitem">
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <span>
                    <a href="mailto: info@acitc.org"> info@acitc.org</a>
                    </span>
                    
                </li>
            </ul>
            <ul className='contact-banner-footer-links'>
                <li key={uuidv4()} className="listitem">
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li key={uuidv4()} className="listitem">
                    <Link to='/faq'>FAQ</Link>
                </li>
                <li key={uuidv4()} className="listitem">
                    <Link to='/request-membership'>Request Membership</Link>
                </li>
            </ul>
        </div>
    )
}

export default ContactBanner
