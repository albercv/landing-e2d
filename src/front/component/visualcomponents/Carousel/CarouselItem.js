import React from 'react'

export const CarouselItem = ({cssClass, picture, title, text}) => {
  return (
    <div className={cssClass} >
        <img src={picture} alt='una imagen' />
        <h1>{title}</h1>
        <h3>{text}</h3>
    </div>
  )
}
