import React from 'react'
import '../../css/visualcomponents/LinksList.css'

export const NavBarLinksList = ({ links }) => {


    return (
        <ul className='navbar-links-list'>
            {Object.keys(links).map((linkKey) => {
                return (
                    <li key={linkKey} className='navbar-link-text'>
                        <a href={`#${linkKey}`}>{links[linkKey]}</a>
                    </li>
                );
            })}
        </ul>
    )
}
