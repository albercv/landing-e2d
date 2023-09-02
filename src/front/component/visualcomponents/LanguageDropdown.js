import React, { useState } from 'react'
import EN from '../../assets/images/eeuu.png'
import ES from '../../assets/images/spain.png'
import '../../css/visualcomponents/LanguageDropdown.css'
import { useTranslation } from 'react-i18next'

export const LanguageDropdown = () => {

    const {t, i18n} = useTranslation("global");

    const [selectedOption, setSelectedOption] = useState('EN');
    

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    return (
        <>
            <img src={selectedOption === 'EN' ? EN : ES} className='dropdown-flag navbar-buttons-section' alt="flag" />    
            <div>
                <select className='dropdown-select' id="language" value={selectedOption} onChange={(event) => handleOptionChange(event)}>
                    <option value="EN">{t("navbar.dropdown_english")}</option>
                    <option value="ES">{t("navbar.dropdown_spanish")}</option>
                </select>
            </div>
        </>
    )
}
