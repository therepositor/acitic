import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const slidesLength = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0)   {
        return null;
    }
    const nextSlide = () => {
        setCurrent(current === slidesLength - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? slidesLength - 1 : current - 1)
    }
    console.log(current)
    return (
        <div className="slider-container">
            <FaArrowAltCircleLeft className='prev' onClick={prevSlide} />
            <FaArrowAltCircleRight className='next' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (  
                        <div key={index} className={index === current ? 'slide active' : 'active'}>
                          {index === current && (
                              <img  src={slide.image} alt="" /> 
                          )}
                                
                        </div>   
                )
            })}
            <h1>The African and Carribbean Innovation <br /> and Technology Center (ACITC)</h1>
                    <p>Fostering Entrepreneurship and Enabling Startups through E2GF </p>
                    <div className="cta">
                        <Link className='cta-link learn-more' to='learn more'>Learn More</Link>
                        <Link className='cta-link get-started' to='/get_started'>Get Started</Link>
                    </div>
        </div>
    )
}

export default ImageSlider
