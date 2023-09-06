import React, { useEffect, useState } from 'react'
import EN from '../../assets/images/eeuu.png'
import ES from '../../assets/images/spain.png'
import '../../css/visualcomponents/LanguageDropdown.css'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../service/LanguageContextProvider.js';


export const LanguageDropdown = () => {

    const { t, i18n } = useTranslation("global");

    const { language, setNewLanguage } = useLanguage();

    const handleOptionChange = (event) => {
        const language = event.target.value;
        setNewLanguage(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className='dropdown-container'>
            <img src={language === 'EN' ? EN : ES} className='dropdown-flag navbar-buttons-section' alt="flag" />
            <select className='dropdown-select' id="language" value={language} onChange={(event) => handleOptionChange(event)}>
                <option className='dropdown-select-option' value="EN">{t("navbar.dropdown_english")}</option>
                <option className='dropdown-select-option' value="ES">{t("navbar.dropdown_spanish")}</option>
            </select>
        </div>
    )
}
