import React, { useEffect, useState } from 'react'
import '../css/Landing.css';
import { Introduction } from './Introduction';
import { NavBar } from './visualcomponents/NavBar';
import { Hamburger } from './visualcomponents/Hamburger';
import { LanguageContextProvider } from '../service/LanguageContextProvider.js';
import { UnlockSection } from './UnlockSection';


export const Landing = () => {

    const desktopScreenMinimumSize = 856;
    const [smallWindowSize, setSmallWindowSize] = useState({ width: window.innerWidth });

    const renderViewSize = {
        "NavBar": NavBar,
        "Hamburger": Hamburger
    }

    const displayWindowSize = () => {
        setSmallWindowSize({ width: document.documentElement.clientWidth });
    };

    const CurrentView = smallWindowSize.width > desktopScreenMinimumSize ? renderViewSize["NavBar"] : renderViewSize["Hamburger"];

    useEffect(() => {
        window.addEventListener('resize', displayWindowSize);

        return () => {
            window.removeEventListener('resize', displayWindowSize);
        };
    }, []);

    return (
        <>
            <LanguageContextProvider>
                <CurrentView />
                <Introduction />
                <UnlockSection />
            </LanguageContextProvider>
        </>
    )
}
