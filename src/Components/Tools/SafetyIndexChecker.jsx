import { useState } from 'react';
import { FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';

const SafetyIndexChecker = () => {
    const [city, setCity] = useState("London");

    const data = {
        "London": { score: 78, emergency: "999" },
        "New York": { score: 65, emergency: "911" },
        "Toronto": { score: 85, emergency: "911" },
        "Sydney": { score: 88, emergency: "000" }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaShieldAlt className="text-blue-500" /> Safety Index
            </h3>

            <select 
                className="select select-bordered w-full mb-6 bg-slate-50 dark:bg-slate-700"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                {Object.keys(data).map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <div className="flex flex-col items-center justify-center py-6">
                <div className={`radial-progress font-bold text-2xl mb-4 ${data[city].score > 80 ? 'text-green-500' : 'text-yellow-500'}`} style={{"--value": data[city].score, "--size": "6rem"}}>
                    {data[city].score}
                </div>
                <p className="text-sm font-bold text-slate-500">Safety Score</p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-xl flex items-center justify-between text-red-700 dark:text-red-300 mt-2">
                <span className="text-sm font-bold flex items-center gap-2"><FaPhoneAlt /> Emergency</span>
                <span className="text-xl font-black">{data[city].emergency}</span>
            </div>
        </div>
    );
};

export default SafetyIndexChecker;
