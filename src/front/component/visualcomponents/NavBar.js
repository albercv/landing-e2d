import React from 'react'
import '../../css/NavBar.css'
import { NavBarLinksList } from './NavBarLinksList'
import { AppointmentButton } from './AppointmentButton'
import { LanguageDropdown } from './LanguageDropdown'

const linksList = ["About us", "Solutions", "Team", "Contact us"]

export const NavBar = () => {
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
