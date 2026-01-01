import { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icon/logo1.png";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../../Components/BookingModal/BookingModal';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled 
                    ? 'top-4' 
                    : 'top-0'
                }`}
            >
                <div className={`mx-auto transition-all duration-300 ${
                    scrolled 
                    ? 'max-w-6xl rounded-full glass shadow-lg border border-white/20 dark:border-white/10 px-6 py-2'
                    : 'w-full px-6 py-4 lg:px-12 bg-transparent'
                }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src={logo}
                                alt="Ambition Global"
                                className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'} w-auto`}
                            />
                            <span className={`font-bold font-serif tracking-tight transition-colors ${
                                scrolled 
                                ? 'text-slate-800 dark:text-white' 
                                : 'text-white drop-shadow-md'
                            } ${scrolled ? 'text-lg' : 'text-xl'}`}>
                                Ambition Global
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-2">
                             <div className={`flex items-center p-1 rounded-full px-4 gap-2 ${scrolled ? '' : 'bg-black/20 backdrop-blur-md'}`}>
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 relative group overflow-hidden ${
                                                isActive 
                                                ? 'text-white bg-primary' 
                                                : scrolled 
                                                    ? 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800' 
                                                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ml-4 ${
                                    scrolled 
                                    ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300' 
                                    : 'hover:bg-white/20 text-white'
                                }`}
                                aria-label="Toggle Dark Mode"
                            >
                                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>

                            <button 
                                onClick={() => setIsBookingOpen(true)}
                                className="ml-4 btn btn-primary btn-sm rounded-full px-6 shadow-lg shadow-primary/30"
                            >
                                Book Now
                            </button>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden flex items-center gap-4">
                             <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ${
                                    scrolled 
                                    ? 'text-slate-600 dark:text-slate-300' 
                                    : 'text-white'
                                }`}
                            >
                                {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className={`text-sm font-bold bg-primary text-white px-4 py-2 rounded-full`}
                            >
                                Book
                            </button>
                            <button
                                onClick={() => setIsOpen(true)}
                                className={`focus:outline-none ${
                                    scrolled 
                                    ? 'text-slate-800 dark:text-white' 
                                    : 'text-white'
                                }`}
                            >
                                <FiMenu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl lg:hidden"
                    >
                         <div className="absolute top-6 right-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white transition-colors"
                            >
                                <FiX size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-2xl md:text-3xl font-bold font-serif tracking-wide transition-colors ${
                                                isActive 
                                                ? 'text-primary' 
                                                : 'text-slate-800 dark:text-white hover:text-primary'
                                            }`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                            
                            <motion.button
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
                                className="btn btn-primary btn-lg rounded-full px-12 shadow-xl"
                            >
                                Book Consultation
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default NavBar;
