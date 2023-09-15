import React, { useRef, useState } from 'react'
import '../../css/visualcomponents/CarouselItem.css'
import { CarouselItem } from './Carousel/CarouselItem';
import { useTranslation } from 'react-i18next';

// TODO rename this class to CarouselLargeScreen
export const CarouselPics = ({ carouselItems, fillColor='#293039', sectionId }) => {

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const items = { 0: item0, 1: item1, 2: item2 };
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation("global");

  const selectedColor = '#05B4BA';

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

  const insertItems = () => {
    return Object.keys(carouselItems).map((key, index) => {
      const item = carouselItems[key];
      return (

        <CarouselItem
          key={index}
          cssClass={item.cssClass}
          picture={item.image}
          title={t(item.title)}
          text={t(item.text)}
          sectionId={sectionId}
          ref={items[index]}
        />
      );
    });
  }

  return (
    <>
    {/* TODO Take dots to a component, repeated logic in CorouselSmallScreen */}
      <div className='carousel-container' >
        {insertItems()}
      </div>
      <div className='carousel-dots'>
        <svg width="84" height="18" viewBox="0 0 84 18" fill="none">
          <circle
            cx="9"
            cy="9"
            r="9"
            fill={currentIndex === 0 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(0)}
          />
          <circle
            className="dot"
            cx="42"
            cy="9"
            r="9"
            fill={currentIndex === 1 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(1)}
          />
          <circle
            className="dot"
            cx="75"
            cy="9"
            r="9"
            fill={currentIndex === 2 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(2)}
          />
        </svg>
      </div>
    </>
  )
};

