import { useState } from 'react';
import { FaPlaneDeparture, FaSuitcase, FaPassport, FaHome } from 'react-icons/fa';

const PreDepartureBriefing = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { 
            title: "Documents", 
            icon: <FaPassport />,
            items: ["Original Passport + Visa", "University Offer Letter (CAS/I-20)", "Financial Proofs", "Medical Reports", "Travel Insurance"]
        },
        { 
            title: "Packing", 
            icon: <FaSuitcase />,
            items: ["Clothes for Weather (Check forecast)", "Power Adapters (Universal)", "Prescription Medicines", "Standard Stationery", "Local Currency Cash"]
        },
        { 
            title: "Arrival", 
            icon: <FaPlaneDeparture />,
            items: ["Airport Pickup Arrangement", "Sim Card Purchase", "BRP Collection (if UK)", "University Registration", "Bank Account Setup"]
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaPlaneDeparture className="text-blue-500" /> Pre-Departure Briefing
            </h3>

             <div className="flex mb-6 border-b border-slate-200 dark:border-slate-700">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`flex-1 pb-4 flex items-center justify-center gap-2 font-bold transition-all ${
                            activeTab === idx 
                            ? 'text-blue-500 border-b-2 border-blue-500' 
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                        }`}
                    >
                        {tab.icon} <span className="hidden sm:inline">{tab.title}</span>
                    </button>
                ))}
            </div>

            <div className="animate-fade-in min-h-[200px]">
                <ul className="space-y-3">
                    {tabs[activeTab].items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-white dark:hover:bg-slate-600 shadow-sm border border-slate-100 dark:border-slate-600 transition-all">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-200">
                 <strong>Pro Tip:</strong> Keep photocopies of all documents in both check-in and carry-on luggage.
            </div>
        </div>
    );
};

export default PreDepartureBriefing;
