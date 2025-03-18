import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../css/visualcomponents/LinksList.css'

export const NavBarLinksList = ({ links }) => {
    const location = useLocation();
    const { t } = useTranslation("global");

    const handleNavigation = (e, linkKey) => {
        if (linkKey === "blog-page") return; // Let blog links handle normally

        e.preventDefault();
        // If we're not on home page, navigate to home first
        if (location.pathname !== '/') {
            window.location.href = `/#${linkKey}`;
        } else {
            // If we're already on home page, just scroll to element
            const element = document.getElementById(linkKey);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <ul className='navbar-links-list'>
            {Object.keys(links).map((linkKey) => {
                if (linkKey === "blog-page") {
                    return (
                        <li key={linkKey} className='navbar-link-text'>
                            <Link to="/blog">{t(links[linkKey])}</Link>
                        </li>
                    );
                }
                
                return (
                    <li key={linkKey} className='navbar-link-text'>
                        <a 
                            href={`/#${linkKey}`}
                            onClick={(e) => handleNavigation(e, linkKey)}
                        >
                            {t(links[linkKey])}
                        </a>
                    </li>
                );
            })}
        </ul>
    )
}
