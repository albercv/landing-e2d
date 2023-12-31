import React, { useState } from 'react'
import '../../css/visualcomponents/AppointmentButton.css'
import { PopupModal } from 'react-calendly'

export const ContactButton = ({ buttonClass, buttonText, buttonType, showButton=true }) => {

    const [state, setState] = useState({
        isOpen: false,
    });

    const buttonLogic = (type) => {
        if(type === 'CALENDLY') {
            setState(prevState => ({
                isOpen: !prevState.isOpen
              }));
        }

        if (type === 'NO_CALENDLY') {
            redirectToId();
        }
    }

    const redirectToId = () => {
        window.location.href = "#contact-section"
    }

    if (!showButton) {
        return null; // No renderizar nada si showButton es falso
    }

    return (
        <>
            <button className={buttonClass} onClick={() => {buttonLogic(buttonType)}}>
                {buttonText}
            </button>
            <PopupModal
                url="https://calendly.com/alberto_e2d"
                onModalClose={() => setState({ isOpen: false })}
                open={state.isOpen}
                rootElement={document.getElementById("root")}
            />
        </>
    )
}
