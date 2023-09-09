import React from 'react'

export const CarouselItem = React.forwardRef(({cssClass, picture, title, text}, ref) => {
  return (
    <div ref={ref} className={cssClass} >
        <img src={picture} alt='una imagen' />
        <h1>{title}</h1>
        <h3>{text}</h3>
    </div>
  )
});
