import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icon/logo1.png";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import BookingModal from '../../Components/BookingModal/BookingModal';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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
        { name: "Home", path: "/#home" },
        { name: "Services", path: "/#services" },
        { name: "About Us", path: "/#about" },
        { name: "Contact", path: "/#contact" },
    ];

    return (
        <>
            <motion.nav 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed w-full z-50 transition-all duration-500 ${
                    scrolled 
                    ? 'top-4 px-4 md:px-8' 
                    : 'top-0 px-0'
                }`}
                aria-label="Main Navigation"
            >
                <div className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    scrolled 
                    ? 'max-w-7xl rounded-2xl glass border border-slate-200/50 dark:border-white/5 px-6 py-2 shadow-lg'
                    : 'w-full px-6 py-6 border-b border-white/5 bg-transparent'
                }`}>
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg p-1" aria-label="Ambition Global Home">
                            <div className="relative">
                                <img
                                    src={logo}
                                    alt="Ambition Global Consultancy Logo"
                                    className={`transition-all duration-500 ${scrolled ? 'h-9 w-9' : 'h-12 w-12'} object-contain drop-shadow-lg`}
                                />
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                            <span className={`font-bold font-serif tracking-tight transition-all duration-500 ${
                                scrolled 
                                ? 'text-slate-900 dark:text-white' 
                                : 'text-slate-900 dark:text-white'
                            } ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                                Ambition Global
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-2">
                             <div className={`flex items-center p-1 rounded-full px-1.5 gap-0.5 transition-all duration-500 ${scrolled ? '' : 'bg-white/5 backdrop-blur-md border border-white/10'}`}>
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `relative px-5 py-2.5 rounded-full font-semibold text-[15px] transition-all duration-500 overflow-hidden text-retina ${
                                                isActive 
                                                ? 'text-white' 
                                                : scrolled 
                                                    ? 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white' 
                                                    : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white'
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span className="relative z-10">{link.name}</span>
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="navbar-indicator"
                                                        className="absolute inset-0 bg-primary rounded-full z-0 shadow-[0_5px_15px_rgba(37,99,235,0.4)]"
                                                        transition={{ type: "spring", bounce: 0.15, duration: 0.7 }}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 ml-8 pl-8 border-l border-slate-200/50 dark:border-white/10">
                                {/* Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                                    className={`p-2.5 rounded-full transition-all duration-500 hover:scale-110 active:scale-95 group relative overflow-hidden ${
                                        scrolled 
                                        ? 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-white/10' 
                                        : 'bg-white/10 dark:bg-black/20 backdrop-blur-md text-slate-900 dark:text-yellow-400 hover:bg-white/20'
                                    }`}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={theme}
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {theme === 'dark' ? <FiMoon size={18} /> : <FiSun size={18} />}
                                        </motion.div>
                                    </AnimatePresence>
                                </button>

                                <button 
                                    onClick={() => setIsBookingOpen(true)}
                                    aria-haspopup="dialog"
                                    className="btn btn-primary h-11 min-h-0 rounded-full px-8 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 text-white font-bold border-none bg-blue-600 group overflow-hidden relative"
                                >
                                    <span className="relative z-10 font-bold">Book Now</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden flex items-center gap-3">
                             <button
                                onClick={toggleTheme}
                                aria-label="Toggle Theme"
                                className={`p-2.5 rounded-full transition-all glass ${
                                    scrolled 
                                    ? 'text-slate-600 dark:text-yellow-400 shadow-md' 
                                    : 'text-slate-900 dark:text-yellow-400 shadow-sm'
                                }`}
                            >
                                {theme === 'dark' ? <FiMoon size={20} /> : <FiSun size={20} />}
                            </button>
                            <button
                                onClick={() => setIsOpen(true)}
                                aria-label="Open Mobile Menu"
                                className={`focus:outline-none p-2.5 rounded-full glass transition-all ${
                                    scrolled 
                                    ? 'text-slate-900 dark:text-white shadow-md' 
                                    : 'text-slate-900 dark:text-white shadow-sm'
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
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[100] bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl lg:hidden flex flex-col"
                    >
                         <div className="flex justify-between items-center p-6 border-b border-slate-200/50 dark:border-white/5">
                            <span className="font-bold text-xl font-serif text-slate-900 dark:text-white">Ambition Global</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Mobile Menu"
                                className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white transition-all hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500 shadow-sm"
                            >
                                <FiX size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col items-start px-8 pt-12 flex-grow gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="w-full"
                                >
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `text-4xl sm:text-5xl font-extrabold font-serif tracking-tight transition-all duration-300 block w-full ${
                                                isActive 
                                                ? 'text-blue-600 dark:text-blue-400' 
                                                : 'text-slate-900 dark:text-white hover:pl-4 hover:text-blue-500'
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
                                transition={{ duration: 0.5, delay: 0.4 }}
                                onClick={() => { setIsOpen(false); setIsBookingOpen(true); }}
                                className="mt-8 w-full btn btn-primary h-14 rounded-2xl shadow-xl shadow-primary/20 text-lg font-bold border-none bg-blue-600 text-white"
                            >
                                Book Consultation
                            </motion.button>
                        </div>
                        
                        <div className="p-8 text-center text-slate-500 text-sm font-medium border-t border-slate-200/50 dark:border-white/5">
                            <p>© 2026 Ambition Global Consultancy</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default NavBar;
