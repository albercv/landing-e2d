import React from 'react'
import '../css/pages/Partnership.css'
import third from '../assets/images/aby_logo.png'
import { useTranslation } from 'react-i18next'
import { PinContainer } from '../components/3d-pin'

export const Partnership = () => {
  const { t } = useTranslation("global");

  return (
    <section className='partnership-section'>

      <div className='partnership-section-text'>
        <h1 className='partnership-section-text-title'>{t("partnership.title")}</h1>
        <p className='partnership-section-text-description'>{t("partnership.description")}</p>
      </div>


      <div className='partnership-section-images flex flex-wrap gap-6 justify-center transform -translate-y-8'>
        <PinContainer
          title="abyfoods.com"
          href="https://www.abyfoods.com"
        >
          <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
            <a href='https://www.abyfoods.fi'>
              <img className='absolute inset-0 w-full h-full object-contain object-center'
                src={third} alt="Logo Aby Foods" />
              <p className='absolute bottom-2 left-0 right-0 text-center text-white text-2xl font-bold text-shadow'>Aby Foods</p>
            </a>
          </div>
        </PinContainer>
        <PinContainer
          title="Email Automation Project"
          href="https://www.youtube.com/embed/S8_A15WK3NM"
        >
          <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/S8_A15WK3NM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="absolute bottom-2 left-0 right-0 text-center text-white text-2xl font-bold text-shadow">Email Automation</p>
          </div>
        </PinContainer>
        <PinContainer
          title="Email Automation Project"
          href="https://www.youtube.com/embed/5AUitDG6iOc"
        >
          <div className="relative w-64 h-64 rounded-xl shadow-md overflow-hidden bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/5AUitDG6iOc"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="absolute bottom-2 left-0 right-0 text-center text-white text-2xl font-bold text-shadow">Email Automation</p>
          </div>
        </PinContainer>
      </div>
    </section>
  )
}
