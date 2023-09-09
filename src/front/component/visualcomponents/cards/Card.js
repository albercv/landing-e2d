import React from 'react'

export const Card = ({picture, text}) => {
    return (
        <div className='our-services-card'>
            <img src={picture} className='our-services-cards-img' alt='IMG' />
            <p className='our-services-cards-text'>{text}</p>
        </div>
    )
}
