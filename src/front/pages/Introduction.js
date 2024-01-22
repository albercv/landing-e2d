import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/LandingIntroduction.css'
import headerImage from '../assets/images/header_landing.webp'
import { ContactButton } from '../component/visualcomponents/ContactButton.js'
import { useTranslation } from 'react-i18next'


export const Introduction = () => {

    const { t } = useTranslation("global");

    return (
        <section id='introduction-section' className='landing-introduction'>
            <div className='landing-logo-container'>
                <img src={logo} className='landing-logo-img' alt="Logo evolve2digital" />
            </div>
            <div className='landing-introduction-block'>
                <div className='landing-introduction-text'>
                    <p className='landing-introduction-text-title'>
                        <span className='landing-introduction-text-title-evolve'>Evolve2Digital </span>
                        <span className='landing-introduction-text-title-description'>{t("introduction.unlock")}</span> {t("introduction.claimText")}
                        <span className='landing-introduction-text-title-future'>{t("introduction.future")}</span>
                    </p>
                    <p className='landing-introduction-text-description'>
                        {t("introduction.introText")}
                    </p>
                    <div className='buttons'>
                        <ContactButton buttonClass='landing-introduction-booking-button' buttonText={t("buttons.appointment")} buttonType="CALENDLY" showButton={true} />
                        <ContactButton buttonClass='landing-introduction-contact-button' buttonText={t("buttons.contact")} buttonType='NO_CALENDLY' showButton={true} />
                    </div>
                </div>
                <div className='landing-introduction-image'>
                    <img src={headerImage} alt="transform the future" />
                </div>
            </div>
            <div className='landing-vision'></div>
        </section>
    )
}