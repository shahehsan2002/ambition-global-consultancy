import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Preloader from '../Components/Preloader/Preloader';
import QuickConnect from '../Components/QuickConnect/QuickConnect';
import AIChatbot from '../Components/Chatbot/AIChatbot';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Main = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup');

    useEffect(() => {
        // Simulate loading time (e.g., for fonts, images, or min time for effect)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds for the 3D preloader to shine

        return () => clearTimeout(timer);
    }, []);

    const PageTransition = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );

    return (
        <div className="min-h-screen text-slate-800 dark:text-white">
            {loading && <Preloader />}
            
            <div className={`transition-opacity duration-700 relative z-10 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                {noHeaderFooter || <NavBar></NavBar>}
                
                <AnimatePresence mode="wait">
                    <PageTransition key={location.pathname}>
                        <Outlet />
                    </PageTransition>
                </AnimatePresence>

                {noHeaderFooter || <>
                    <QuickConnect />
                    <AIChatbot />

                </>}
                {noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
    );
};

export default Main;