import React from 'react'

//TODO change image alt text
export const CarouselItem = React.forwardRef(({cssClass, picture, title, text, sectionId}, ref) => {
  console.log(`SectionID: ${sectionId}`);

  return (
    <div ref={ref} className={`${cssClass} ${sectionId}`} >
        <img src={picture} alt='una imagen' />
        <h1>{title}</h1>
        <h3>{text}</h3>
    </div>
  )
});
