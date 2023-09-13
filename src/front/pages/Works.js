import React from 'react'
import '../css/pages/Works.css'
import { i18next } from 'i18next'
import { useTranslation } from 'react-i18next'

export const Works = () => {

    const { t } = useTranslation("global");

    return (
        <section className='passed-works-section'>
            <div className='passed-works-one-third store-image'>
                <div className='passed-works-overlay'>
                    <div className='passed-works-text'>
                        <h1>{t("our_work.store")}</h1>
                        <p>{t("our_work.store_description")}</p>
                    </div>
                </div>
            </div>
            <div className='passed-works-one-third mobile-image'>
                <div className='passed-works-overlay'>
                    <div className='passed-works-text'>
                        <h1>{t("our_work.mobile_first")}</h1>
                        <p>{t("our_work.mobile_first_description")}</p>
                    </div>
                </div>
            </div>
            <div className='passed-works-one-third dashboard-image'>
                <div className='passed-works-overlay'>
                    <div className='passed-works-text'>
                        <h1>{t("our_work.analytics_dashboard")}</h1>
                        <p>{t("our_work.analytics_dashboard_description")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
