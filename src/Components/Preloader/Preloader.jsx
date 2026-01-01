import { motion } from 'framer-motion';
import { FaPlane } from 'react-icons/fa';

const Preloader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="relative text-center">
                {/* Globe/Circle */}
                <motion.div
                    className="w-32 h-32 border-4 border-slate-200 dark:border-slate-700 rounded-full mx-auto relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Rotating Plane */}
                    <motion.div
                        className="absolute w-full h-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-2xl transform -rotate-45">
                            <FaPlane />
                        </div>
                    </motion.div>
                    
                    {/* Inner Pulse */}
                    <div className="absolute inset-0 m-auto w-24 h-24 bg-primary/10 rounded-full animate-ping" />
                     <div className="absolute inset-0 m-auto w-16 h-16 bg-primary/20 rounded-full animate-pulse" />
                </motion.div>

                <h2 className="mt-8 text-2xl font-bold font-serif text-slate-800 dark:text-white tracking-widest uppercase">
                    Ambition
                    <span className="text-primary block text-sm font-sans font-medium tracking-[0.3em] mt-2">Global Consultantcy</span>
                </h2>
            </div>
        </div>
    );
};

export default Preloader;
