import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className='sign-in'>
            <nav className='homenavbar'>
                <span>
                    <h3>Welcome Back</h3>     
                </span>     
            </nav>
            <div className="sign-in-bg">
                <div className='yellow-bg'>
                    <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Polygon 3" d="M420 0V420H0L420 0Z" fill="#FDCC52"/>
                    </svg>
                </div>
                <div className="sign-in-form">
                    <form action="">
                        <div className="form-group"> 
                            <input placeholder='Email' type="email" name='email' id='email'/>
                        </div>
                        <div className="form-group">    
                            <div className="password-input-group">
                                <input placeholder='Password' type="password" id='password' name='password'/>
                                <FontAwesomeIcon className='eye-slash' icon={faEyeSlash} />
                            </div>      
                        </div>
                        <small>Forgot Password?</small>
                        <div className="form-group-submit"><input type="submit" value="Sign in" /></div>
                    </form>
                    <div className="alt-sign-in">
                        <p>
                            New here? <Link to='/get_started' className='sign-up-navLink'>Sign Up</Link> <br />
                            or sign in with <br />
                        </p>
                        <div>
                        <span>
                            <Link to='https://google.com'>
                                <svg className='fa-google' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="flat-color-icons:google">
                                    <path id="Vector" d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#FFC107"/>
                                    <path id="Vector_2" d="M6.306 14.691L12.877 19.51C14.655 15.108 18.961 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691Z" fill="#FF3D00"/>
                                    <path id="Vector_3" d="M24 44C29.166 44 33.86 42.023 37.409 38.808L31.219 33.57C29.1436 35.1484 26.6075 36.0021 24 36C18.798 36 14.381 32.683 12.717 28.054L6.19501 33.079C9.50501 39.556 16.227 44 24 44Z" fill="#4CAF50"/>
                                    <path id="Vector_4" d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#1976D2"/>
                                    </g>
                                </svg>   
                            </Link>  
                        </span>
                        <span>
                            <Link to='https://linkedin.com'>
                                <svg className='fa-linkedin' width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="logos:linkedin-icon" clipPath="url(#clip0_12_13)">
                                    <path id="Vector" d="M218.123 218.127H180.192V158.724C180.192 144.559 179.939 126.324 160.464 126.324C140.708 126.324 137.685 141.758 137.685 157.693V218.123H99.755V95.967H136.168V112.661H136.678C140.322 106.43 145.588 101.304 151.915 97.8292C158.242 94.3542 165.393 92.6604 172.606 92.928C211.051 92.928 218.139 118.216 218.139 151.114L218.123 218.127V218.127ZM56.955 79.27C44.798 79.272 34.941 69.418 34.939 57.261C34.937 45.104 44.79 35.247 56.947 35.245C69.104 35.242 78.961 45.096 78.963 57.253C78.9641 63.0911 76.646 68.6904 72.5187 72.8194C68.3915 76.9483 62.793 79.2687 56.955 79.27V79.27ZM75.921 218.128H37.95V95.967H75.92V218.127L75.921 218.128ZM237.033 0.0180215H18.89C8.58 -0.0979785 0.125001 8.16102 -0.000999451 18.471V237.524C0.121001 247.839 8.575 256.106 18.889 255.998H237.033C247.369 256.126 255.856 247.859 255.999 237.524V18.454C255.852 8.12402 247.364 -0.133978 237.033 0.00102154" fill="#0A66C2"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_12_13">
                                    <rect width="256" height="256" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </Link>   
                        </span>
                        </div>
                        
                    </div>
                </div>
            </div>   
        </div>
    )
}
export default SignIn
