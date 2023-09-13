import React from 'react'
import { Card } from '../component/visualcomponents/cards/Card'
import { useTranslation } from 'react-i18next'

import '../css/pages/OurServices.css'
import browserPic from '../assets/images/table/browser_icon.svg'
import bulb from '../assets/images/table/bulb_icon.svg'
import smartphone from '../assets/images/table/smartphone_icon.svg'
import user from '../assets/images/table/user_icon.svg'
import dashboard from '../assets/images/table/dashboard_icon.svg'
import check from '../assets/images/table/check_icon.svg'
import { ContactButton } from '../component/visualcomponents/ContactButton'

export const OurServices = () => {

    const { t } = useTranslation("global");

    return (
        <section >
            <div className='our-services-block'>
                <div className='our-services-text'>
                    <h3 className='our-services-caption'>{t("our_services.caption")}</h3>
                    <h1 className='our-services-title'>{t("our_services.title")}</h1>
                    <p className='our-services-description'>{t("our_services.description")}</p>
                </div>
                <div className='our-services-cards-grid'>
                    <div className='our-services-column-header'>{t("our_services.development")}</div>
                    <div className='our-services-column-header our-services-column-header-second-row'>{t("our_services.strategy")}</div>
                    <Card picture={browserPic} text={t("our_services.custom_dev")} />
                    <Card picture={bulb} text={t("our_services.ideation")} />
                    <Card picture={smartphone} text={t("our_services.responsive")} />
                    <Card picture={user} text={t("our_services.research")} />
                    <Card picture={dashboard} text={t("our_services.optimization")} />
                    <Card picture={check} text={t("our_services.planning")} />
                </div>
                <div>
                    <ContactButton buttonClass='landing-introduction-booking-button booking-style-contact-button' buttonText={t("buttons.contact_help")} buttonType='NO_CALENDLY' showButton={true} />
                </div>
                <section>
                    <div className='our-work-section'>
                        <h1>{t("our_work.title")}</h1>
                        <h6>{t("our_work.description")}</h6>
                    </div>
                </section>
            </div>
        </section>
    )
}
