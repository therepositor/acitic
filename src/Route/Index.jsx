import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Components/Home'

const Index = ({ buttonRef,
                 onClick,
                 handleOnClickAboutUs,
                 aboutUsRef,
                 handleOnclickMenuOptions,
                 optionsButtonRef,
                 sortDownRef,
                 handleMobileOptionsbutton}) =>  (
        <BrowserRouter>
            <Header
             buttonRef={buttonRef}
             onClick={onClick}
             handleOnClickAboutUs={handleOnClickAboutUs}
             aboutUsRef={aboutUsRef}
             handleOnclickMenuOptions={handleOnclickMenuOptions}
             optionsButtonRef={optionsButtonRef}
             sortDownRef={sortDownRef}
             handleMobileOptionsbutton={handleMobileOptionsbutton}></Header>
            <Routes>
                <Route path='/' exact element={<Home />} />
            </Routes>
            <Footer></Footer>
        </BrowserRouter>
)


export default Index
