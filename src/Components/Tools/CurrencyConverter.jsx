import { useState } from 'react';
import { FaExchangeAlt, FaMoneyBillWave } from 'react-icons/fa';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState('BDT');
    const [to, setTo] = useState('GBP');

    // Mock Rates (In real app, fetch from API)
    const rates = {
        'BDT': 1,
        'USD': 0.0091,
        'GBP': 0.0072,
        'CAD': 0.012,
        'AUD': 0.014,
        'EUR': 0.0084
    };

    const convert = () => {
        // Base is BDT
        const inBDT = amount / rates[from];
        return (inBDT * rates[to]).toFixed(2);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaExchangeAlt className="text-green-500" /> Currency Converter
            </h3>

            <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-2xl mb-6">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">Amount</label>
                <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="w-full bg-transparent text-4xl font-bold text-slate-800 dark:text-white focus:outline-none border-b border-transparent focus:border-green-500 transition-colors"
                />
            </div>

            <div className="flex items-center gap-4 mb-8">
                <div className="flex-1">
                     <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">From</label>
                    <select 
                        value={from} 
                        onChange={(e) => setFrom(e.target.value)}
                        className="select select-bordered w-full bg-white dark:bg-slate-600"
                    >
                        {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className="mt-6 text-slate-400">
                    <FaExchangeAlt />
                </div>
                <div className="flex-1">
                     <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">To</label>
                    <select 
                        value={to} 
                        onChange={(e) => setTo(e.target.value)}
                        className="select select-bordered w-full bg-white dark:bg-slate-600"
                    >
                        {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>

            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{amount} {from} =</p>
                <h4 className="text-4xl font-bold text-green-600 dark:text-green-400">{convert()} {to}</h4>
                <p className="text-xs text-slate-400 mt-2">*Indicative rates only</p>
            </div>
        </div>
    );
};

export default CurrencyConverter;
