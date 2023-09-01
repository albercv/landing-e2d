import React from 'react'
import '../../css/visualcomponents/LinksList.css'

export const NavBarLinksList = ({links}) => {

    
    return (
        <ul className='navbar-links-list'>
            {links.map((link, index) => {
                return <li key={index} className='navbar-link-text'> {link} </li>;
            })}
        </ul>
    )
}
