import React from 'react'
import '../../css/visualcomponents/Hamburger.css'
import { LanguageDropdown } from './LanguageDropdown'
import { NavBarLinksList } from './NavBarLinksList'
import { useTranslation } from 'react-i18next'

export const Hamburger = () => {

  const { t } = useTranslation("global");

  const linksList = {
    "introduction-section": t("navbar.aboutus"),
    "unlock-section": t("navbar.services"),
    "team-section": t("navbar.team"),
    "contact-section": t("navbar.contact")
  };

  return (<>
    <label htmlFor="menu-control" className="hamburger">
      <i className="hamburger__icon"></i>
      <i className="hamburger__icon"></i>
      <i className="hamburger__icon"></i>
    </label>

    <input type="checkbox" id="menu-control" className="menu-control" />

    <aside className="sidebar">

      <nav className="sidebar__menu">
        <NavBarLinksList links={linksList} />
        <LanguageDropdown />
      </nav>
      <label htmlFor="menu-control" className="sidebar__close">
        <i className="hamburger__close"></i>
      </label>

    </aside>
  </>)
}
