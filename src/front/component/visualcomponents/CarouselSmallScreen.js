import React, { useRef, useState } from 'react'
import '../../css/visualcomponents/CarouselItem.css'
import { CarouselItem } from './Carousel/CarouselItem';
import eye from '../../assets/images/fi-rr-eye.svg'
import dart from '../../assets/images/fi-rr-dart.svg'
import mountain from '../../assets/images/mountain.png'
import { useTranslation } from 'react-i18next'

export const CarouselSmallScreen = ({ cssClass }) => {
  const { t } = useTranslation("global");

  const items = {
    vision: {
      position: 0,
      image: eye,
      title: t("carousel.vision"),
      text: t("carousel.vision_text")
    },
    mission: {
      position: 1,
      image: dart,
      title: t("carousel.mission"),
      text: t("carousel.mission_text")
    },
    goal: {
      position: 2,
      image: mountain,
      title: t("carousel.goal"),
      text: t("carousel.goal_text")
    }
  };

  const [currentCard, setCurrentCard] = useState(items.vision);

  

  const handleCarouselClick = (index) => {
    setCurrentCard(items[index]);
  }

  return (
    <>
      <div className='carousel-container'>
        <CarouselItem
          cssClass={cssClass}
          picture={currentCard.image}
          title={t(currentCard.title)}
          text={t(currentCard.text)}
        />

      </div>
      <div className='carousel-dots'>
        <svg width="84" height="18" viewBox="0 0 84 18" fill="none">
          <circle
            cx="9"
            cy="9"
            r="9"
            fill={currentCard.position === 0 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick('vision')}
          />
          <circle
            className="dot"
            cx="42"
            cy="9"
            r="9"
            fill={currentCard.position === 1 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick('mission')}
          />
          <circle
            className="dot"
            cx="75"
            cy="9"
            r="9"
            fill={currentCard.position === 2 ? '#05B4BA' : '#293039'}
            onClick={() => handleCarouselClick('goal')}
          />
        </svg>
      </div>
    </>
  )
};

