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
                    <h3 className='our-services-caption'>Solutions</h3>
                    <h1 className='our-services-title'>Our Services</h1>
                    <p className='our-services-description'>At Evolve2Digital, we know that the digital world can be overwhelming, which is why we offer a range of services designed to help your business succeed. From web development to product strategy, our team of experts is ready to help you unlock your potential and achieve your goals.</p>
                </div>
                <div className='our-services-cards-grid'>
                    <div className='our-services-column-header'>Web Development</div>
                    <div className='our-services-column-header'>Product Strategy</div>
                    <Card picture={browserPic} text={"Custom web development"} />
                    <Card picture={bulb} text={"Product ideation"} />
                    <Card picture={smartphone} text={"Responsive design"} />
                    <Card picture={user} text={"User research"} />
                    <Card picture={dashboard} text={"Performance optimization"} />
                    <Card picture={check} text={"Launch planning"} />
                </div>
                <div>
                    <ContactButton buttonClass='landing-introduction-booking-button booking-style-contact-button' buttonText={t("buttons.contact_help")} buttonType='NO_CALENDLY' showButton={true} />
                </div>
                <section>
                    <div className='our-work-section'>
                        <h1>Our Work</h1>
                        <h6>Here are some examples of our work and the results we have achieved for our clients.</h6>
                    </div>
                </section>
            </div>
        </section>
    )
}
