import { useState, useEffect } from 'react';
import { FaGlobeAmericas, FaClock } from 'react-icons/fa';

const TimeVisualizer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const zones = [
        { label: "Your Time", diff: 0 },
        { label: "London (UK)", diff: -6 }, // Rough estimate from BST/GMT vs BDT (approx)
        { label: "New York (USA)", diff: -11 },
        { label: "Toronto (CA)", diff: -11 },
        { label: "Sydney (AU)", diff: 4 } // Approx
    ];

    const getTimeInZone = (offset) => {
        const localTime = time.getTime();
        const localOffset = time.getTimezoneOffset() * 60000;
        const utc = localTime + localOffset;
        // This is a rough simulation assuming user is in UTC+6 (Bangladesh). 
        // For production, use date-fns-tz or similar.
        // Simplified Logic: Just add offset hours to current time for visual effect
        const targetTime = new Date(time.getTime() + (offset * 3600000)); 
        return targetTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-700 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
                <FaGlobeAmericas className="text-blue-400" /> Global Time
            </h3>

            <div className="space-y-4 relative z-10">
                {zones.map((z, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <span className="font-medium text-slate-300">{z.label}</span>
                        <div className="flex items-center gap-2 font-mono font-bold text-blue-200">
                            <FaClock size={12} />
                            {getTimeInZone(z.diff)}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 text-center text-xs text-slate-500">
                *Times are approximate relative to your location
            </div>
        </div>
    );
};

export default TimeVisualizer;
