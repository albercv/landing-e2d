import React from 'react'
import '../css/pages/Partnership.css'
import third from '../assets/images/aby_logo.png'
import { useTranslation } from 'react-i18next'
import burntimeout from '../assets/images/burn_logo.png'
import hkc from '../assets/images/hkc_logo.png'
import { PinContainer } from '../components/3d-pin'

export const Partnership = () => {
  const { t } = useTranslation("global");

  return (
    <section className='partnership-section'>

      <div className='partnership-section-text'>
        <h1 className='partnership-section-text-title'>{t("partnership.title")}</h1>
        <p className='partnership-section-text-description'>{t("partnership.description")}</p>
      </div>


      <div className='partnership-section-images'>
      <PinContainer
          title="abyfoods.com"
          href="https://www.abyfoods.com"
        >
        <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
          <a href='https://www.abyfoods.fi'>
            <img className='absolute inset-0 w-full h-full object-contain object-center'  
            src={third} alt="Logo Aby Foods" />
            <p className='absolute bottom-2 left-0 right-0 text-center text-white'>Aby Foods</p>
          </a>
        </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
          <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
            <a href='https://burntimeout.com/'>
            <img className='absolute inset-0 w-full h-full object-contain object-center' 
              src={burntimeout} alt="Logo evolve2digital" />
              <p className="absolute bottom-2 left-0 right-0 text-center text-white text-center mt-2 text-white">BurnTimeOut</p>
            </a>
          </div>
        </PinContainer>
        <PinContainer
          title="/ui.aceternity.com"
          href="https://twitter.com/mannupaaji"
        >
        <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
          <a href='https://aby-food.onrender.com'>
          <img className='absolute inset-0 w-full h-full object-contain object-center' 
             src={hkc} alt="Logo evolve2digital" />
            <p className='absolute bottom-2 left-0 right-0 text-center text-white'>Human Kind Chatbot</p>
          </a>
        </div>
        </PinContainer>
      </div>
    </section>
  )
}
