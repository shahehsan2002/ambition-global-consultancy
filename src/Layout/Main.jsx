import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Preloader from '../Components/Preloader/Preloader';
import QuickConnect from '../Components/QuickConnect/QuickConnect';
import AIChatbot from '../Components/Chatbot/AIChatbot';
import { useState, useEffect } from 'react';

const Main = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup');

    useEffect(() => {
        // Simulate loading time (e.g., for fonts, images, or min time for effect)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds minimum load time

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-light dark:bg-dark transition-colors duration-300">
            {loading && <Preloader />}
            
            <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                {noHeaderFooter || <NavBar></NavBar>}
                <Outlet></Outlet>
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