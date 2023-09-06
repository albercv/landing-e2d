/* 
In media queries 856px is the width when the screen does not look properly 
whereas 428px is closer to the actual mobile width
*/


import React from 'react'
import '../../css/visualcomponents/Hamburger.css'
import { LanguageDropdown } from './LanguageDropdown'

export const Hamburger = () => {
    return (<>
        <label htmlFor="menu-control" className="hamburger">
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
      </label>
      
      <input type="checkbox" id="menu-control" className="menu-control" />
      
      <aside className="sidebar">
        
        <nav className="sidebar__menu">
          <a href="#">Home</a>
          <a href="">About us</a>
          <a href="">Services</a>
          <a href="">Products</a>
          <a href="">Contact</a>
          <LanguageDropdown />
        </nav>
        
        <label htmlFor="menu-control" className="sidebar__close"></label>
      </aside>
      </>)
}
