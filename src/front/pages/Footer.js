import React from 'react'
import '../css/Footer.css'

export const Footer = () => {
    return (
        <footer className='flaticon-container'>
            <div className='flaticon-email-us'>
                <a href='mailto:hello@evolve2digital.com' >Email Us</a>
                <a href='https://wa.me/34605497639'>WhatsApp</a>
                <a className='flaticon-phone-us' href='tel:+34605497639' >+34 605 497 639</a>
                <a className='flaticon-phone-us' href='tel:+1(478) 606-8008' >+1(478) 606-8008</a>
            </div>
            <div>
                <a className='flaticon-link' href="https://www.flaticon.com/free-icons/goal" title="goal icons">Goal icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Icons made by Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
            </div>
        </footer>
    )
}
