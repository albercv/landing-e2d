import React, { useState } from 'react'
import '../../css/visualcomponents/CarouselItem.css'
import { CarouselItem } from './Carousel/CarouselItem';
import { useTranslation } from 'react-i18next';

export const CarouselSmallScreen = ({ carouselItems, fillColor='#293039', sectionId}) => {

  const { t } = useTranslation("global");
  const [currentCard, setCurrentCard] = useState( Object.values(carouselItems)[0]);
  const selectedColor = '#05B4BA';

  const handleCarouselClick = (index) => {
    setCurrentCard(Object.values(carouselItems)[index]);
  }

  return (
    <>
      <div className='carousel-container'>
        <CarouselItem
          cssClass={currentCard.cssClass}
          picture={currentCard.image}
          title={t(currentCard.title)}
          sectionId={t(sectionId)}
          text={t(currentCard.text)}
        />

      </div>
      {/* TODO Take dots to a component, repeated logic in CorouselPics */}
      <div className='carousel-dots'>
        <svg width="84" height="18" viewBox="0 0 84 18" fill="none">
          <circle
            cx="9"
            cy="9"
            r="9"
            fill={currentCard.position === 0 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(0)}
          />
          <circle
            className="dot"
            cx="42"
            cy="9"
            r="9"
            fill={currentCard.position === 1 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(1)}
          />
          <circle
            className="dot"
            cx="75"
            cy="9"
            r="9"
            fill={currentCard.position === 2 ? selectedColor : fillColor}
            onClick={() => handleCarouselClick(2)}
          />
        </svg>
      </div>
    </>
  )
};

