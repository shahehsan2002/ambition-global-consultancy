import { useState } from 'react';
import { FaChartLine, FaCoins } from 'react-icons/fa';

const ROICalculator = () => {
    const [cost, setCost] = useState(25000); // Total investment
    const [salary, setSalary] = useState(35000); // Expected annual salary

    const breakeven = Math.max(0.5, cost / (salary * 0.3)).toFixed(1); // Assuming 30% savings rate

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaChartLine className="text-emerald-500" /> ROI Calculator
            </h3>

            <div className="space-y-6 mb-8">
                <div>
                    <label className="label text-xs font-bold uppercase text-slate-500">Total Investment (£/$/€)</label>
                    <input type="range" min="10000" max="100000" step="1000" value={cost} onChange={(e) => setCost(e.target.value)} className="range range-xs range-primary" />
                    <div className="text-right font-bold text-slate-700 dark:text-slate-300">{parseInt(cost).toLocaleString()}</div>
                </div>
                <div>
                     <label className="label text-xs font-bold uppercase text-slate-500">Expected Annual Salary</label>
                    <input type="range" min="20000" max="100000" step="1000" value={salary} onChange={(e) => setSalary(e.target.value)} className="range range-xs range-secondary" />
                    <div className="text-right font-bold text-slate-700 dark:text-slate-300">{parseInt(salary).toLocaleString()}</div>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl text-center relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-sm opacity-70 mb-2">Estimated Breakeven Time</p>
                    <h2 className="text-5xl font-bold mb-1">{breakeven} <span className="text-lg">Years</span></h2>
                    <p className="text-xs opacity-50">*Based on 30% savings rate</p>
                </div>
                <FaCoins className="absolute -bottom-4 -right-4 text-8xl opacity-10 rotate-12" />
            </div>
        </div>
    );
};

export default ROICalculator;
