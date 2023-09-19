import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Landing } from '../../Landing'
import ReactGA from 'react-ga4'


const TRACKING_ID = process.env.REACT_APP_ANALYTICS_KEY;

export const Router = () => {
    ReactGA.initialize(TRACKING_ID);

    ReactGA.send({ hitType: "pageview", page: "/", title: "Landing" });

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}
