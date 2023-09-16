import React from 'react'
import { ContactButton } from '../component/visualcomponents/ContactButton'
import { useTranslation } from 'react-i18next';
import '../css/pages/ContactSection.css'
import { Form } from '../component/visualcomponents/Form';

export const ContactSection = () => {
  const { t } = useTranslation("global");
  return (
    <section id='contact-section' className='contact-section'>
      <div className='contact-section-text'>
        <h1 className='contact-section-text-title'>{t("contact.title")}</h1>
        <p className='contact-section-text-description'>{t("contact.description")}</p>
        <ContactButton 
        buttonClass='contact-section-booking-button' 
        buttonText={t("buttons.appointment")} 
        buttonType='CALENDLY' 
        showButton={true} />
      </div>
      <Form />
    </section>
  )
}
