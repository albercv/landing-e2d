import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/LandingIntroduction.css'
import headerImage from '../assets/images/header_landing.png'
import { AppointmentButton } from './visualcomponents/AppointmentButton.js'

export const Introduction = () => {
  return (
    <div className='landing-introduction'>
            <div className='landing-logo-container'>
                <img src={logo} className='landing-logo-img' alt="Logo evolve2digital image"/>
            </div>
            <div className='landing-introduction-block'>
            <div className='landing-introduction-text'>
                <p className='landing-introduction-text-title'>
                    <span className='landing-introduction-text-title-evolve'>Evolve2Digital </span>
                    <span className='landing-introduction-text-title-description'>Unlock</span> Your Business's Future.
                </p>
                <p className='landing-introduction-text-description'>
                    Welcome to Evolve2Digital, a dynamic and forward-thinking tech company based in Wyoming with a relocated Spanish team. We specialize in leveraging the power of technology to drive business growth and success. Our team of experts offers cutting-edge web development and product strategy services tailored to transform your company. Experience the confidence and trust that comes with partnering with Evolve2Digital as we help you unlock your business's full potential.
                </p>
                <div className='buttons'>
                    <AppointmentButton />
                    <button className='landing-introduction-contact-button'>
-                        Contact us
-                    </button>                 
                </div>
                </div>
                <div className='landing-introduction-image'>
                    <img src={headerImage} alt="header image"/>
                </div>
            </div>
            <div className='landing-vision'></div>
        </div>
  )
}