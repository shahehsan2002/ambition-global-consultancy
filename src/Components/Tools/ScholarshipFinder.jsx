import { useState } from 'react';
import { FaSearch, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

const ScholarshipFinder = () => {
    const [filter, setFilter] = useState('All');

    const scholarships = [
        { name: "Chevening Scholarship", country: "UK", type: "Fully Funded", deadline: "Nov 2024" },
        { name: "Commonwealth Masters", country: "UK", type: "Fully Funded", deadline: "Dec 2024" },
        { name: "Fulbright Program", country: "USA", type: "Fully Funded", deadline: "Oct 2024" },
        { name: "Vanier Canada Graduate", country: "Canada", type: "Partial", deadline: "Sep 2024" },
        { name: "Australia Awards", country: "Australia", type: "Fully Funded", deadline: "Apr 2024" },
        { name: "GREAT Scholarship", country: "UK", type: "£10,000", deadline: "May 2024" },
    ];

    const filtered = scholarships.filter(s => filter === 'All' || s.country === filter);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaGraduationCap className="text-secondary" /> Scholarship Hub
            </h3>

            <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
                {['All', 'UK', 'USA', 'Canada', 'Australia'].map(c => (
                     <button 
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                            filter === c 
                            ? 'bg-secondary text-white' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filtered.map((s, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 flex justify-between items-center group hover:border-secondary transition-colors">
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white">{s.name}</h4>
                            <div className="flex gap-2 text-xs mt-1">
                                <span className="bg-white dark:bg-slate-600 px-2 py-0.5 rounded text-slate-500 dark:text-slate-300 border border-slate-200 dark:border-slate-500">{s.country}</span>
                                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded border border-green-200 dark:border-green-800">{s.type}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-slate-500">Deadline</p>
                            <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">{s.deadline}</p>
                        </div>
                    </div>
                ))}
            </div>
             <button className="w-full mt-6 btn btn-outline btn-secondary btn-sm gap-2">
                View All Opportunities <FaExternalLinkAlt size={12}/>
            </button>
        </div>
    );
};

export default ScholarshipFinder;
