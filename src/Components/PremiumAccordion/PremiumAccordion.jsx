import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const PremiumAccordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className={`rounded-3xl overflow-hidden transition-all duration-500 ${
                        activeIndex === index 
                            ? 'bg-white dark:bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-slate-100 dark:ring-white/10' 
                            : 'bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10'
                    }`}
                >
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                        <span className={`text-xl font-bold transition-colors duration-300 ${
                            activeIndex === index ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-gray-400'
                        }`}>
                            {item.question}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                             activeIndex === index ? 'bg-slate-900 dark:bg-white text-white dark:text-black rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-400'
                        }`}>
                            {activeIndex === index ? <FiMinus className="text-lg" /> : <FiPlus className="text-lg" />}
                        </div>
                    </button>
                    
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <div className="px-8 pb-8 text-lg text-slate-500 dark:text-gray-400 leading-relaxed border-t border-slate-50 dark:border-white/5 pt-6 font-medium">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default PremiumAccordion;
