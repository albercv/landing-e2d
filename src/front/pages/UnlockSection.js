import React from 'react'
import '../css/UnlockSection.css';
import { CarouselPics } from '../component/visualcomponents/CarouselPics.js';
import arrow from '../assets/images/arrow.png'
import { useTranslation } from 'react-i18next'
import { CarouselSmallScreen } from '../component/visualcomponents/CarouselSmallScreen';
import { UnlockSectionData } from '../assets/staticData/UnlockSectionData';
import { TeamSectionData } from '../assets/staticData/TeamSectionData';

export const UnlockSection = ({ smallWindowSize, section }) => {

    const { t } = useTranslation("global");
    const desktopScreenMinimumSize = 856;

    const sections = {
        "unlock": UnlockSectionData,
        "team": TeamSectionData
    }


    const renderSection = sections[section];

    const renderViewSize = {
        "CarouselPics": CarouselPics,
        "CarouselSmallScreen": CarouselSmallScreen
    }

    const renderLinkToTeam = () => {
        return renderSection.text.team ?
                <div className='landing-unlock-text-button'>
                     <a href='#team-section'>{t(renderSection.text.team)}</a>
                    <img src={arrow} alt='arrow' />
                </div>
                : null
    }

    const Carousel = smallWindowSize.width > desktopScreenMinimumSize ? renderViewSize["CarouselPics"] : renderViewSize["CarouselSmallScreen"];

    return (
        // {}
        <section id={`${renderSection.text.sectionId}`} className={`landing-unlock-block ${section}`}>
            <div className={`landing-unlock-text ${section}`}>
                <div className='landing-unlock-text-evolve'>EVOLVE2DIGITAL</div>
                <div className={`landing-unlock-text-title ${section}`}>
                    <h1>{t(renderSection.text.title)}
                    </h1>
                </div>
                <div className={`landing-unlock-text-description ${section}`}><p>{t(renderSection.text.description)}</p></div>
                {renderLinkToTeam()}
            </div>
            <div className='landing-unlock-slider-section'>
                <div className='landing-unlock-slider'>
                    <Carousel carouselItems={renderSection.slides} fillColor={renderSection.text.dotsColor} sectionId={renderSection.text.sectionId}/>
                </div>
            </div>
        </section>
    )
}
