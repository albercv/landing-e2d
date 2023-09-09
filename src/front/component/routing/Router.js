import React from 'react'
import {Routes, Route, BrowserRouter } from "react-router-dom"
import { Landing } from '../../Landing'



export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
