import React, { useEffect, useState } from 'react'
import './css/Landing.css';
import { Introduction } from './pages/Introduction';
import { NavBar } from './component/visualcomponents/NavBar';
import { Hamburger } from './component/visualcomponents/Hamburger';
import { UnlockSection } from './pages/UnlockSection';
import { Footer } from './pages/Footer';
import { OurServices } from './pages/OurServices';
import { Works } from './pages/Works';
import { Partnership } from './pages/Partnership';

export const Landing = () => {

    const desktopScreenMinimumSize = 856;
    const [smallWindowSize, setNewScreenSize] = useState({ width: window.innerWidth });

    const renderViewSize = {
        "NavBar": NavBar,
        "Hamburger": Hamburger
    }

    const displayWindowSize = () => {
        setNewScreenSize({ width: document.documentElement.clientWidth });
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
            <CurrentView />
            <Introduction />
            <UnlockSection smallWindowSize={smallWindowSize} />
            <OurServices />
            <Works />
            <Partnership />
            <Footer />
        </>
    )
}
