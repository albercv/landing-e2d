import React, { createContext, useContext, useState } from 'react';

const ScreenSizeContext = createContext();

export function ScreenSizeContextProvider({ children }) {
    const desktopScreenMinimumSize = 856;
    const [smallWindowSize, setSmallWindowSize] = useState({ width: window.innerWidth });

    const setNewScreenSize = (newScreenSize) => {
        setSmallWindowSize(newScreenSize);
        localStorage.setItem('screenSize', newScreenSize);
    };

    return (
        <ScreenSizeContext.Provider value={{ smallWindowSize, setNewScreenSize }}>
            {children}
        </ScreenSizeContext.Provider>
    );
}

export function useScreenSizeContext() {
    const context = useContext(ScreenSizeContext);
    if (!context) {
        throw new Error('useScreenSizeContext debe ser utilizado dentro de un ScreenSizeContext');
    }
    return context;
}