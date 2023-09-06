import React, { useEffect, useState } from 'react'
import EN from '../../assets/images/eeuu.png'
import ES from '../../assets/images/spain.png'
import '../../css/visualcomponents/LanguageDropdown.css'
import { useTranslation } from 'react-i18next'

export const LanguageDropdown = () => {

    const { t, i18n } = useTranslation("global");

    const [selectedOption, setSelectedOption] = useState('');

    const getStoragedLanguage = () => {
        return localStorage.getItem('language');
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            return setSelectedOption(storedLanguage);
        }
        setSelectedOption("EN");
    }, [])

    const handleOptionChange = (event) => {
        const language = event.target.value;
        setSelectedOption(language);
        storageLanguage(language);
        i18n.changeLanguage(language);
    };



    const storageLanguage = (language) => {
        localStorage.setItem('language', language);
    }

    return (
        <div className='dropdown-container'>
            <img src={selectedOption === 'EN' ? EN : ES} className='dropdown-flag navbar-buttons-section' alt="flag" />
            <select className='dropdown-select' id="language" value={selectedOption} onChange={(event) => handleOptionChange(event)}>
                <option className='dropdown-select-option' value="EN">{t("navbar.dropdown_english")}</option>
                <option className='dropdown-select-option' value="ES">{t("navbar.dropdown_spanish")}</option>
            </select>
        </div>
    )
}
