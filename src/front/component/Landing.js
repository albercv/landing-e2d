import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/Landing.css';

export const Landing = () => {
    return (
        <div className='landing-introduction'>
            <div className='landing-logo-container'>
                <img src={logo} className='landing-logo-img' />
            </div>
            <div className='landing-introduction-text'>
                <p className='landing-introduction-text-title'>
                    <span className='landing-introduction-text-title-evolve'>Evolve2Digital</span>
                    Unlock Your Business's Future.
                </p>
                <p className='landing-introduction-text-description'>
                    Welcome to Evolve2Digital, a dynamic and forward-thinking tech company based in Wyoming with a relocated Spanish team. We specialize in leveraging the power of technology to drive business growth and success. Our team of experts offers cutting-edge web development and product strategy services tailored to transform your company. Experience the confidence and trust that comes with partnering with Evolve2Digital as we help you unlock your business's full potential.
                </p>
                <div className='buttons'>
                    <button className='landing-introduction-booking-button'>
                        Book an appoinment now
                    </button>
                    <button className='landing-introduction-contact-button'>
                        Contact us
                    </button>
                </div>
                <div className='landing-introduction-image'></div>
            </div>
            <div className='landing-vision'></div>
        </div>
    )
}
