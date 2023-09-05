import React, { useEffect, useState } from 'react'
import '../css/Landing.css';
import { Introduction } from './Introduction';
import { NavBar } from './visualcomponents/NavBar';
import { Hamburger } from './visualcomponents/Hamburger';

export const Landing = () => {

    const [smallWindowSize, setSmallWindowSize] = useState( window.innerWidth );
    console.log(smallWindowSize)

    const renderViewSize = {
        "NavBar": NavBar,
        "Hamburger": Hamburger
    }

    const displayWindowSize = () => {
        setSmallWindowSize({ width: document.documentElement.clientWidth });
    };

    const CurrentView = smallWindowSize.width > 428 ? renderViewSize["NavBar"] : renderViewSize["Hamburger"];

    useEffect(() => {
        window.addEventListener('resize', displayWindowSize);

        return () => {
            window.removeEventListener('resize', displayWindowSize);
        };
    }, []);

    return (
        <>
            <CurrentView />
            <Introduction />
        </>
    )
}
