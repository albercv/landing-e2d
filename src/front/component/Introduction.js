import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/LandingIntroduction.css'
import headerImage from '../assets/images/header_landing.png'
import { AppointmentButton } from './visualcomponents/AppointmentButton.js'
import { useTranslation } from 'react-i18next'

export const Introduction = () => {

    const {t} = useTranslation("global");

    return (
        <div className='landing-introduction'>
            <div className='landing-logo-container'>
                <img src={logo} className='landing-logo-img' alt="Logo evolve2digital image" />
            </div>
            <div className='landing-introduction-block'>
                <div className='landing-introduction-text'>
                    <p className='landing-introduction-text-title'>
                        <span className='landing-introduction-text-title-evolve'>Evolve2Digital </span>
                        <span className='landing-introduction-text-title-description'>{t("introduction.unlock")}</span> {t("introduction.claimText")}
                    </p>
                    <p className='landing-introduction-text-description'>
                    {t("introduction.introText")}
                    </p>
                    <div className='buttons'>
                        <AppointmentButton />
                        <button className='landing-introduction-contact-button'>Contact us</button>
                    </div>
                </div>
                <div className='landing-introduction-image'>
                    <img src={headerImage} alt="header image" />
                </div>
            </div>
            <div className='landing-vision'></div>
        </div>
    )
}