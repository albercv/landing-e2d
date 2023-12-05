import React from 'react'
import '../css/pages/Partnership.css'
import third from '../assets/images/aby_logo.png'
import { useTranslation } from 'react-i18next'
import burntimeout from '../assets/images/burn_logo.png'
import hkc from '../assets/images/hkc_logo.png'

export const Partnership = () => {
  const { t } = useTranslation("global");

  return (
    <section className='partnership-section'>
      <div className='partnership-section-text'>
        <h1 className='partnership-section-text-title'>{t("partnership.title")}</h1>
        <p className='partnership-section-text-description'>{t("partnership.description")}</p>
      </div>
      <div className='partnership-section-images'>
        <div className='partnership-section-image-container'>
          <a href='https://burntimeout.com/'>
            <img className='partnership-section-image' src={burntimeout} alt="Logo evolve2digital" />
            <p className='partnership-section-image-title'>BurnTimeOut</p>
          </a>
        </div>
        <div className='partnership-section-image-container'>
          <a href='https://aby-food.onrender.com'>
            <img className='partnership-section-image' src={hkc} alt="Logo evolve2digital" />
            <p className='partnership-section-image-title'>Human Kind Chatbot</p>
          </a>
        </div>
        <div className='partnership-section-image-container'>
          <a href='https://www.abyfoods.fi'>
            <img className='partnership-section-image aby' src={third} alt="Logo Aby Food" />
            <p className='partnership-section-image-title'>Aby Food</p>
          </a>
        </div>
      </div>
    </section>
  )
}
