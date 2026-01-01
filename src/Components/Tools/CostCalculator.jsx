import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaDollarSign } from 'react-icons/fa';

const CostCalculator = () => {
    const [country, setCountry] = useState('UK');
    const [duration, setDuration] = useState(1);

    const costs = {
        'UK': { tuition: 13000, living: 12000, currency: 'GBP' },
        'USA': { tuition: 25000, living: 15000, currency: 'USD' },
        'Canada': { tuition: 18000, living: 12000, currency: 'CAD' },
        'Australia': { tuition: 30000, living: 20000, currency: 'AUD' }
    };

    const currentCost = costs[country];
    const total = (currentCost.tuition * duration) + (currentCost.living * duration);

    return (
        <section className="py-24 bg-light dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    <motion.div
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Budget Planner</span>
                        <h2 className="text-4xl font-bold mt-2 mb-6 font-serif text-slate-800 dark:text-white">
                            Estimate Your <span className="text-primary">Study Costs</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                            Planning your finances is the first step towards a successful study abroad journey. Use our calculator to get a rough estimate of potential expenses.
                        </p>
                        
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700">
                            <div className="space-y-6">
                                <div>
                                    <label className="label text-slate-700 dark:text-slate-300 font-semibold">Study Destination</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                        {Object.keys(costs).map((c) => (
                                            <button
                                                key={c}
                                                onClick={() => setCountry(c)}
                                                className={`py-2 px-4 rounded-lg font-medium transition-all ${
                                                    country === c 
                                                    ? 'bg-primary text-white shadow-lg' 
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                                }`}
                                            >
                                                {c}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="label text-slate-700 dark:text-slate-300 font-semibold">Course Duration (Years): <span className="text-primary text-xl ml-2">{duration}</span></label>
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="4" 
                                        value={duration} 
                                        onChange={(e) => setDuration(parseInt(e.target.value))} 
                                        className="range range-primary range-sm" 
                                    />
                                    <div className="w-full flex justify-between text-xs px-2 mt-2 text-slate-400">
                                        <span>1 yr</span>
                                        <span>2 yrs</span>
                                        <span>3 yrs</span>
                                        <span>4 yrs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }} 
                         className="relative"
                    >
                        {/* Blob Background */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                        
                        <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-10 shadow-2xl border border-slate-100 dark:border-slate-700 text-center">
                            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-3xl">
                                <FaCalculator />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Estimated Budget</h3>
                            <p className="text-slate-500 mb-8">For {duration} Year(s) in {country}</p>
                            
                            <hr className="border-slate-100 dark:border-slate-700 mb-8" />
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                                    <span>Tuition Fees</span>
                                    <span className="font-bold text-slate-800 dark:text-white">{currentCost.currency} {(currentCost.tuition * duration).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                                    <span>Living Expenses</span>
                                    <span className="font-bold text-slate-800 dark:text-white">{currentCost.currency} {(currentCost.living * duration).toLocaleString()}</span>
                                </div>
                            </div>
                            
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6">
                                <span className="text-sm text-slate-500 uppercase tracking-widest font-semibold block mb-2">Total Estimate</span>
                                <span className="text-4xl font-bold text-primary block">
                                    {currentCost.currency} {total.toLocaleString()}
                                </span>
                            </div>
                            
                            <p className="text-xs text-slate-400 mt-6">* This is a rough estimate. Actual costs may vary.</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CostCalculator;
