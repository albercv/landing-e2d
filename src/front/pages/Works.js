import React from 'react'
import '../css/pages/Works.css'

export const Works = () => {
    return (
        <section >
            <div className='passed-works-section'>
                <div className='passed-works-one-third store-image'>
                    <div className='passed-works-overlay'>
                        <div className='passed-works-text'>
                            <h1>Online Store</h1>
                            <p>Increased sales by 70% in the first year.</p>
                        </div>
                    </div>
                </div>
                <div className='passed-works-one-third mobile-image'>
                    <div className='passed-works-overlay'>
                        <div className='passed-works-text'>
                            <h1>Mobile First</h1>
                            <p>At our agency, mobile comes first. That means everything we do is designed to work seamlessly on any device, anywhere.</p>
                        </div>
                    </div>
                </div>
                <div className='passed-works-one-third dashboard-image'>
                    <div className='passed-works-overlay'>
                        <div className='passed-works-text'>
                            <h1>Analitycs Dashboard</h1>
                            <p>Our data visibility boost: 50% improvement and counting.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
