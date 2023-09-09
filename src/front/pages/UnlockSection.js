import React from 'react'
import '../css/UnlockSection.css';
import { CarouselPics } from '../component/visualcomponents/CarouselPics.js';
import arrow from '../assets/images/arrow.png'
import { useTranslation } from 'react-i18next'
import { CarouselSmallScreen } from '../component/visualcomponents/CarouselSmallScreen';
import { useScreenSizeContext } from '../service/ScreenSizeContextProvider';

export const UnlockSection = () => {

    const { t } = useTranslation("global");
    const desktopScreenMinimumSize = 856;
    const {smallWindowSize} = useScreenSizeContext();

    const renderViewSize = {
        "CarouselPics": CarouselPics,
        "CarouselSmallScreen": CarouselSmallScreen
    }

    const Carousel = smallWindowSize.width > desktopScreenMinimumSize ? renderViewSize["CarouselPics"] : renderViewSize["CarouselSmallScreen"];

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
                    <Carousel cssClass='carousel-item' />
                </div>
            </div>
        </section>
    )
}
