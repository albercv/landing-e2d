import React from 'react'
import '../css/UnlockSection.css';
import { CarouselPics } from '../component/visualcomponents/CarouselPics.js';
import arrow from '../assets/images/arrow.png'
import { useTranslation } from 'react-i18next'

export const UnlockSection = () => {

    const { t } = useTranslation("global");

    return (
        <section id="unlock-section" className='landing-unlock-block'>
            <div className='landing-unlock-text'>
                <div className='landing-unlock-text-evolve'>EVOLVE2DIGITAL</div>
                <div className='landing-unlock-text-title'>
                    <h1>{t("unlock_section.title")}
                    </h1>
                </div>
                <div className='landing-unlock-text-description'><p>{t("unlock_section.description")}</p></div>
                <div className='landing-unlock-text-button'>
                    <p>{t("unlock_section.team")}</p>
                    <img src={arrow} alt='arrow' />
                </div>
            </div>
            <div className='landing-unlock-slider-section'>
                <div className='landing-unlock-slider'>
                    <CarouselPics />
                </div>
            </div>
        </section>
    )
}
