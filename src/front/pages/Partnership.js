import React from 'react'
import '../css/pages/Partnership.css'
import logo from '../assets/images/logo.png'
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
          <img className='partnership-section-image' src={burntimeout} alt="Logo evolve2digital" />
          <p className='partnership-section-image-title'>BurnTimeOut</p>
        </div>
        <div className='partnership-section-image-container'>
          <img className='partnership-section-image' src={hkc} alt="Logo evolve2digital" />
          <p className='partnership-section-image-title'>Human Kind Chatbot</p>
        </div>
        <div className='partnership-section-image-container'>
          <img className='partnership-section-image' src={logo} alt="Logo evolve2digital" />
          <p className='partnership-section-image-title'>E2D</p>
        </div>
      </div>
    </section>
  )
}
