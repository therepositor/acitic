import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSortDown} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const NavBar = ({buttonRef, 
                 onClick,
                 handleOnClickAboutUs,
                 aboutUsRef,
                 handleOnclickMenuOptions,
                 optionsButtonRef,
                 sortDownRef,
                 handleMobileOptionsbutton}) => {
    return (
        <nav className='horizontal-navigation'>
             <Link to='/' className='logo'>
                 ACITC
             </Link>
            <div className="hamburger-button"> 
                <FontAwesomeIcon className='faBarsButton' onClick={onClick}  icon={faBars} />                    
                <FontAwesomeIcon className='faUserButton' onClick={handleMobileOptionsbutton} icon={faUser} />              
            </div>
            <ul ref={buttonRef} className='vertical-navigation'>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink active' to='/'>Home</Link>
                </li>
                <li className='navitem' key={uuidv4()}>
                    <div onClick={handleOnClickAboutUs} className='about-us-link-container'>
                        <span className='navlink'>About Us</span>
                        <span>
                            <FontAwesomeIcon icon={faSortDown} />
                        </span>
                    </div> 
                    <ul ref={aboutUsRef} className='about-us-navlinks'>
                        <li key={uuidv4()} className='about-us-navitem'>
                            <Link className='navlink' to='/goals & executive summary'>Goals & Executive Summary</Link>
                        </li>
                        <li key={uuidv4()} className='about-us-navitem'>
                            <Link className='navlink' to='/leadership teams'>Leadership Teams</Link>
                        </li>
                    </ul>
                    
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/our offerings'>Our Offerings</Link>
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/blog'>Blog</Link>
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='options-menu'>
                <FontAwesomeIcon 
                    onClick={handleOnclickMenuOptions} className='options-menu-button' 
                    icon={faBars} />
                <span ref={sortDownRef} className='sort-down-icon'>
                     <FontAwesomeIcon  icon={faSortDown} />
                </span>              
            </div>
            <ul ref={optionsButtonRef} className="options-nav-menu">
                    <li className="navitem">
                        <Link className='options-nav-link' to='sign_in'>Sign In</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='profile'>Profile</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='mentors'>Mentors</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='alumni'>Alumni</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='log-out'>Log Out</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar
