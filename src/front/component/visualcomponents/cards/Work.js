import React from 'react'

export const Work = ({title, workText}) => {
    return (
        <div className='passed-works-one-third store-image'>
            <div className='passed-works-text passed-works-overlay'>
                <h1>{title}</h1>
                <p>{workText}</p>
            </div>
        </div>
    )
}
