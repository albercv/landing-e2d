import React, { useEffect, useState } from 'react'
import '../../css/visualcomponents/AppointmentButton.css'
import { PopupModal } from 'react-calendly'

export const ContactButton = ({ buttonClass, buttonText, buttonType }) => {

    const [state, setState] = useState({
        isOpen: false,
    });

    const buttonLogic = (type) => {
        if(type === 'CALENDLY') {
            setState(prevState => ({
                isOpen: !prevState.isOpen
              }));
        }
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
