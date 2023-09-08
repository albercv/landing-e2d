import React from 'react'
import '../../css/NavBar.css'
import { NavBarLinksList } from './NavBarLinksList'
import { ContactButton } from './ContactButton'
import { LanguageDropdown } from './LanguageDropdown'
import { useTranslation } from 'react-i18next'


export const NavBar = () => {
  const { t } = useTranslation("global");

  const linksList = {
    "introduction-section": t("navbar.aboutus"),
    "unlock-section": t("navbar.services"),
    "team-section": t("navbar.team"),
    "contact-section": t("navbar.contact")
  };

  return (
    <nav className='navbar-container'>
      <div className='navbar-ul-section'>
        <NavBarLinksList links={linksList} />
      </div>
      <div className='navbar-buttons-section'>
        <LanguageDropdown />
        <ContactButton buttonClass='landing-introduction-booking-button' buttonText={t("buttons.appointment")} buttonType="CALENDLY" showButton={true} />
      </div>
    </nav>
  )
}
