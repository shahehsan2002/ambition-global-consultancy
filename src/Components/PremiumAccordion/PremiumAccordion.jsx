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
                    className={`rounded-xl overflow-hidden transition-all duration-300 ${
                        activeIndex === index 
                            ? 'bg-white dark:bg-slate-800 shadow-lg ring-1 ring-primary/20' 
                            : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800'
                    }`}
                >
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                        <span className={`text-lg font-medium pr-8 transition-colors ${
                            activeIndex === index ? 'text-primary' : 'text-slate-800 dark:text-white'
                        }`}>
                            {item.question}
                        </span>
                        <span className={`text-xl transition-transform duration-300 ${
                            activeIndex === index ? 'text-primary rotate-180' : 'text-slate-400'
                        }`}>
                            {activeIndex === index ? <FiMinus /> : <FiPlus />}
                        </span>
                    </button>
                    
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/50 pt-4">
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
