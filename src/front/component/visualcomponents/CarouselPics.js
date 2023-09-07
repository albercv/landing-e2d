import React, { useRef, useState } from 'react'
import '../../css/visualcomponents/CarouselItem.css'
import { CarouselItem } from './Carousel/CarouselItem';

export const CarouselPics = () => {

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const items = {0: item0, 1: item1, 2: item2};
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselClick = (index) => {
    setCurrentIndex(index);
    const newPosition = -index * 100; // 100% de desplazamiento por elemento
    Object.keys(items).forEach((key) => {
      const item = items[key];
      if (item.current) {
        item.current.style.transform = `translateX(${newPosition}%)`;
      }
    });
  }

  return (
    <>
      <div className='carousel-container'>      
        <CarouselItem 
        ref={item0} 
        cssClass='carousel-item' 
        picture={'../../assets/images/eeuu.png'} 
        title={'España'} 
        text={'España es el país más grande del mundo'} />

        <div ref={item1} className='carousel-item'></div>
        <div ref={item2}className='carousel-item'></div>
      </div>
      <div className='carousel-dots'>
        <svg width="84" height="18" viewBox="0 0 84 18" fill="none">
          <circle
            cx="9"
            cy="9"
            r="9"
            fill={currentIndex === 0 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick(0)}
          />
          <circle
            className="dot"
            cx="42"
            cy="9"
            r="9"
            fill={currentIndex === 1 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick(1)}
          />
          <circle
            className="dot"
            cx="75"
            cy="9"
            r="9"
            fill={currentIndex === 2 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick(2)}
          />
        </svg>
      </div>
    </>
  )
};

