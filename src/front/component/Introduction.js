import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png'
import '../css/LandingIntroduction.css'
import headerImage from '../assets/images/header_landing.png'
import { ContactButton } from './visualcomponents/ContactButton.js'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../service/LanguageContextProvider.js';


export const Introduction = () => {

    const { t, i18n } = useTranslation("global");
    const { language } = useLanguage();

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language])

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
                    <img src={headerImage} alt="header image" />
                </div>
            </div>
            <div className='landing-vision'></div>
        </div>
    )
}