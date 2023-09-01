import React, { useState } from 'react'
import EN from '../../assets/images/eeuu.png'
import ES from '../../assets/images/spain.png'
import '../../css/visualcomponents/LanguageDropdown.css'

export const LanguageDropdown = () => {

    const [selectedOption, setSelectedOption] = useState('EN');
    

    const handleOptionChange = (event) => {
        console.log(event.target.value);
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <img src={selectedOption === 'EN' ? EN : ES} className='dropdown-flag navbar-buttons-section' alt="flag" />    
            <div>
                <select id="language" value={selectedOption} onChange={handleOptionChange}>
                    <option value="EN">Inglés</option>
                    <option value="ES">Español</option>
                </select>
            </div>
        </>
    )
}
