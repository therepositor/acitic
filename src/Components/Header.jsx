import React from 'react'
import ContactBanner from './ContactBanner';
import NavBar from './NavBar';

const Header = ({buttonRef, 
                 onClick,
                 handleOnClickAboutUs,
                 aboutUsRef,
                 handleOnclickMenuOptions,
                 optionsButtonRef,
                 sortDownRef,
                 handleMobileOptionsbutton }) => {
    return (
        <header>
            <ContactBanner  />
            <NavBar 
            handleOnClickAboutUs={handleOnClickAboutUs} 
            buttonRef={buttonRef} 
            onClick={onClick}
            aboutUsRef={aboutUsRef}
            handleOnclickMenuOptions={handleOnclickMenuOptions}
            optionsButtonRef={optionsButtonRef}
            sortDownRef={sortDownRef}
            handleMobileOptionsbutton={handleMobileOptionsbutton} />
        </header>
    )
}

export default Header
