import { useState } from 'react';
import { FaCalculator, FaMoneyCheckAlt } from 'react-icons/fa';

const FinancePlanner = () => {
    const [values, setValues] = useState({ tuition: 0, living: 0, paid: 0, scholarship: 0 });

    const totalLiability = (parseFloat(values.tuition || 0) + parseFloat(values.living || 0)) - (parseFloat(values.paid || 0) + parseFloat(values.scholarship || 0));

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaMoneyCheckAlt className="text-green-600" /> Visa Finance Planner
            </h3>
            
            <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="label text-xs font-bold uppercase text-slate-500">1 Year Tuition</label>
                        <input type="number" onChange={(e) => setValues({...values, tuition: e.target.value})} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" />
                    </div>
                    <div className="flex-1">
                        <label className="label text-xs font-bold uppercase text-slate-500">Living Cost (1 Yr)</label>
                        <input type="number" onChange={(e) => setValues({...values, living: e.target.value})} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" />
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="label text-xs font-bold uppercase text-slate-500">Amount Paid</label>
                        <input type="number" onChange={(e) => setValues({...values, paid: e.target.value})} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" />
                    </div>
                    <div className="flex-1">
                        <label className="label text-xs font-bold uppercase text-slate-500">Scholarship</label>
                        <input type="number" onChange={(e) => setValues({...values, scholarship: e.target.value})} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" />
                    </div>
                </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-2xl text-center">
                <p className="text-sm font-bold text-slate-500 mb-1">REQUIRED BANK BALANCE</p>
                <h2 className={`text-4xl font-bold ${totalLiability > 0 ? 'text-slate-800 dark:text-white' : 'text-green-500'}`}>
                    {totalLiability > 0 ? totalLiability.toLocaleString() : 0}
                </h2>
                <p className="text-xs text-slate-400 mt-2">*Must be held for 28 days before applying</p>
            </div>
        </div>
    );
};

export default FinancePlanner;
