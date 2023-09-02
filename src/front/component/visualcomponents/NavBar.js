import React from 'react'
import '../../css/NavBar.css'
import { NavBarLinksList } from './NavBarLinksList'
import { AppointmentButton } from './AppointmentButton'
import { LanguageDropdown } from './LanguageDropdown'
import { useTranslation } from 'react-i18next'


export const NavBar = () => {
  const {t} = useTranslation("global");

  const linksList = [t("navbar.aboutus"), t("navbar.services"), t("navbar.team"), t("navbar.contact")]

  return (
    <div className='navbar-container'>
        <div className='navbar-ul-section'>
            <NavBarLinksList links={linksList} />
        </div>
        <div className='navbar-buttons-section'>
            <LanguageDropdown />
            <AppointmentButton />
        </div>
    </div>
  )
}
