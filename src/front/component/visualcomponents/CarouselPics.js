import React, { useRef, useState } from 'react'
import '../../css/visualcomponents/CarouselItem.css'
import { CarouselItem } from './Carousel/CarouselItem';
import eye from '../../assets/images/fi-rr-eye.svg'
import dart from '../../assets/images/fi-rr-dart.svg'
import mountain from '../../assets/images/mountain.png'
import { useTranslation } from 'react-i18next'

export const CarouselPics = () => {

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const items = {0: item0, 1: item1, 2: item2};
  const [currentIndex, setCurrentIndex] = useState(0);

  const {t} = useTranslation("global");

  const handleCarouselClick = (index) => {
    setCurrentIndex(index);
    const newPosition = -index * 100;
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
        picture={eye} 
        title={t("carousel.vision")} 
        text={t("carousel.vision_text")} 
        />
        
        <CarouselItem 
        ref={item1} 
        cssClass='carousel-item' 
        picture={dart} 
        title={t("carousel.mission")} 
        text={t("carousel.mission_text")} 
        />
        
        <CarouselItem 
        ref={item2} 
        cssClass='carousel-item' 
        picture={mountain} 
        title={t("carousel.goal")} 
        text={t("carousel.goal_text")} 
        />
        
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

