import React from 'react'
import '../../css/visualcomponents/AppointmentButton.css'


export const ContactButton = ({buttonClass, buttonText}) => {

    return (
        <button className={buttonClass}>
            {buttonText}
        </button>
    )
}
