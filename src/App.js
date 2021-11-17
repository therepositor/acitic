import Index from './Route/Index';
import './App.css';
import { useRef } from 'react'

function App() {
  const ref = useRef(null);
  const aboutUsRef = useRef(null);
  const optionsButtonRef = useRef(null);
  const sortDownRef = useRef(null);

  const handleHamburgerClick = (e) => {
    console.log({e, ref})
    if (ref.current.classList.contains('activeNavBar')) {
      ref.current.classList.remove('activeNavBar');
    } else {
      ref.current.classList.add('activeNavBar');
    }
  }
  const handleOnClickAboutUs = (e) => {
    console.log({e, aboutUsRef})
    if (aboutUsRef.current.classList.contains('about-us-modal')) {
      aboutUsRef.current.classList.remove('about-us-modal');
    } else {
      aboutUsRef.current.classList.add('about-us-modal');
    }
  }
  const handleOnclickMenuOptions = (e) => {
    console.log({e, optionsButtonRef, sortDownRef})
    if (optionsButtonRef.current.classList.contains('menu-options-modal')) {
      optionsButtonRef.current.classList.remove('menu-options-modal');
      sortDownRef.current.classList.remove('sort-down-ref-active')
    } else {
      optionsButtonRef.current.classList.add('menu-options-modal');
      sortDownRef.current.classList.add('sort-down-ref-active');
    }
  }
  
  const handleMobileOptionsbutton = (e) => {
    console.log({e, sortDownRef, optionsButtonRef})
    if (optionsButtonRef.current.classList.contains('menu-mobile-options-modal')) {
      optionsButtonRef.current.classList.remove('menu-mobile-options-modal');
      // sortDownRef.current.classList.remove('sort-down-ref-active')
    } else {
      optionsButtonRef.current.classList.add('menu-mobile-options-modal');
      // sortDownRef.current.classList.add('sort-down-ref-active');
    }
  }
  
  return (
    <div className="App">
      <Index 
      buttonRef={ref} 
      onClick={handleHamburgerClick}
      handleOnClickAboutUs={handleOnClickAboutUs}
      aboutUsRef={aboutUsRef}
      handleOnclickMenuOptions={handleOnclickMenuOptions}
      optionsButtonRef={optionsButtonRef}
      sortDownRef={sortDownRef}
      handleMobileOptionsbutton={handleMobileOptionsbutton}  />
    </div>
  );
}

export default App;
