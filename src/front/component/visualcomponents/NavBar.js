import React, { useEffect, useRef, useState } from 'react'
import '../../css/NavBar.css'
import { NavBarLinksList } from './NavBarLinksList'
import { ContactButton } from './ContactButton'
import { LanguageDropdown } from './LanguageDropdown'
import { useTranslation } from 'react-i18next'


export const NavBar = () => {
  const { t } = useTranslation("global");

  const linksList = [t("navbar.aboutus"), t("navbar.services"), t("navbar.team"), t("navbar.contact")]

  const [smallWindowSize, setWindowSize] = useState({ width: 768 });
  const navbarContainerRef = useRef(null);

  return (
    <nav className='navbar-container' ref={navbarContainerRef}>
      <div className='navbar-ul-section'>
        <NavBarLinksList links={linksList} />
      </div>
      <div className='navbar-buttons-section'>
        <LanguageDropdown />
        <ContactButton buttonClass='landing-introduction-booking-button' buttonText={t("buttons.appointment")} buttonType="CALENDLY" showButton={true}/>
      </div>
    </nav>
  )
}
