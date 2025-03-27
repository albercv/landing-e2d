import React, { useEffect, useState } from 'react'
import './css/Landing.css';
import { Introduction } from './pages/Introduction';
import { NavBar } from './component/visualcomponents/NavBar';
import { Hamburger } from './component/visualcomponents/Hamburger';
import { useTranslation } from 'react-i18next';
import { UnlockSection } from './pages/UnlockSection';
import { Footer } from './pages/Footer';
import { OurServices } from './pages/OurServices';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Partnership } from './pages/Partnership';
import { ContactSection } from './pages/ContactSection';
import { ChatWindow } from './component/visualcomponents/ChatWindow';
import { MessagesContextProvider } from './service/ChatbotMessagesContextProvider';
import BlogList from './pages/BlogList'
import BlogPost from './pages/Blog'

export const Landing = () => {
    const desktopScreenMinimumSize = 856;
    const [smallWindowSize, setNewScreenSize] = useState({ width: window.innerWidth });
    const location = useLocation();
    const { t } = useTranslation();
    const linksList = {
        "introduction-section": t("navbar.aboutus"),
        "unlock-section": t("navbar.services"),
        "team-section": t("navbar.team"),
        "contact-section": t("navbar.contact"),
        "blog-page": "Blog",
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const renderViewSize = {
        "NavBar": NavBar,
        "Hamburger": Hamburger
    }

    const displayWindowSize = () => {
        setNewScreenSize({ width: document.documentElement.clientWidth });
    };

    useEffect(() => {
        window.addEventListener('resize', displayWindowSize);
        return () => {
            window.removeEventListener('resize', displayWindowSize);
        };
    }, []);

    const MainContent = () => (
        <>
            <Introduction />
            <UnlockSection smallWindowSize={smallWindowSize} section="unlock" />
            <OurServices />
            <Partnership />
            <UnlockSection smallWindowSize={smallWindowSize} section="team" />
            <ContactSection />
        </>
    );

    // Determine which navigation component to show
    const NavigationComponent = smallWindowSize.width > desktopScreenMinimumSize ? NavBar : Hamburger;

    return (
        <div className="app-container flex flex-col min-h-screen">
            {/* Navigation is now outside of Routes */}
            <NavigationComponent linksList={linksList} />
            <MessagesContextProvider>
            <div className="flex-1">
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainContent />
                        </>
                    } />
                    <Route path="/blog" element={
                        <>
                            <BlogList />
                        </>
                    } />
                    <Route path="/blog/:slug" element={
                        <>
                            <BlogPost />
                        </>
                    } />
                </Routes>
                </div>
                <ChatWindow />
                <Footer className="mt-auto"/>
            </MessagesContextProvider>
        </div>
    )
}