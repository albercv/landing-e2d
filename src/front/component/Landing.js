import React from 'react'
import '../css/Landing.css';
import { Introduction } from './Introduction';
import { NavBar } from './visualcomponents/NavBar';

export const Landing = () => {
    return (
        <>
            <NavBar />
            <Introduction />
        </>
    )
}
