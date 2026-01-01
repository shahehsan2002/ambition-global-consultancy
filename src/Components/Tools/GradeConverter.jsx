import { useState } from 'react';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';

const GradeConverter = () => {
    const [cgpa, setCgpa] = useState('');
    const [scale, setScale] = useState('4.0');

    const getUKGrade = () => {
        const val = parseFloat(cgpa);
        if (!val) return "---";
        
        if (scale === '4.0') {
            if (val >= 3.6) return "1st Class Honours";
            if (val >= 3.0) return "2:1 (Upper Second)";
            if (val >= 2.5) return "2:2 (Lower Second)";
            return "Third Class / Pass";
        }
        return "---";
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaGraduationCap className="text-red-500" /> Grade Converter
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                     <label className="label text-xs font-bold uppercase text-slate-500">Your CGPA</label>
                    <input type="number" value={cgpa} onChange={(e) => setCgpa(e.target.value)} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" placeholder="e.g. 3.5" />
                </div>
                 <div>
                     <label className="label text-xs font-bold uppercase text-slate-500">Scale</label>
                    <select value={scale} onChange={(e) => setScale(e.target.value)} className="select select-bordered w-full bg-slate-50 dark:bg-slate-700">
                        <option value="4.0">Out of 4.0</option>
                        <option value="5.0">Out of 5.0</option>
                        <option value="10.0">Out of 10.0</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center justify-center mb-6 text-slate-300">
                <FaArrowRight size={24} className="rotate-90 md:rotate-0" />
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl text-center border border-red-100 dark:border-red-800">
                <p className="text-sm font-bold text-red-800 dark:text-red-200 mb-1">UK EQUIVALENT</p>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{getUKGrade()}</h2>
            </div>
        </div>
    );
};

export default GradeConverter;
