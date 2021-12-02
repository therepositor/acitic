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
                    <Link className='navlink active' to='/'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.assign('/');
                    }}>Home</Link>
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
                            <Link className='navlink' to='/goals_&_executive_summary' onClick={(e) => {
                                e.preventDefault();
                                window.location.assign('/goals_&_executive_summary');
                            }}>Goals & Executive Summary</Link>
                        </li>
                        <li key={uuidv4()} className='about-us-navitem'>
                            <Link className='navlink' to='/leadership_teams' onClick={(e) => {
                                e.preventDefault();
                                window.location.assign('/leadership_teams');
                            }}>Leadership Teams</Link>
                        </li>
                    </ul>
                    
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/our_offerings'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.assign('/our_offerings');
                    }}>Our Offerings</Link>
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/blog'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.assign('/blog');
                    }}>Blog</Link>
                </li>
                <li className='navitem' key={uuidv4()}>
                    <Link className='navlink' to='/contact'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.assign('/contact');
                    }}>Contact</Link>
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
                        <Link className='options-nav-link' to='sign_in'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign('sign_in');
                        }}>Sign In</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='profile'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign('profile')
                        }}>Profile</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='mentors'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign('mentors')
                        }}>Mentors</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='alumni'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign('alumni');
                        }}>Alumni</Link>
                    </li>
                    <li className="navitem">
                        <Link className='options-nav-link' to='log-out'
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign('log-out')
                        }}>Log Out</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavBar
