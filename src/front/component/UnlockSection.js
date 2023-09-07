import React from 'react'
import '../css/UnlockSection.css';
import { CarouselPics } from './visualcomponents/CarouselPics.js';

export const UnlockSection = () => {
  return (
    <section className='landing-unlock-block'>
        <div className='landing-unlock-text'>
        <div className='landing-unlock-text-evolve'>EVOLVE2DIGITAL</div>
        <div className='landing-unlock-text-title'>
            <h1>Unlocking the Future through Digital Innovation.
                </h1>
            </div>
        <div className='landing-unlock-text-description'><p>Our team of experts merges creative vision with exceptional technical skills to turn ideas into impactful digital realities. From mobile applications to web platforms and beyond, we are dedicated to driving digital transformation and guiding businesses towards success in the digital era.</p></div>
        <div className='landing-unlock-text-button'><p>Our team -></p></div>
        </div>
        <div className='landing-unlock-slider-section'>
            <div className='landing-unlock-slider'>
                <CarouselPics />
            </div>
        </div>
    </section>
  )
}
