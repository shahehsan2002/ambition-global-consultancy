import { FaCity, FaMoneyBillWave } from 'react-icons/fa';

const LivingCostHeatmap = () => {
    const cities = [
        { name: "London", cost: "££££", color: "bg-red-500" },
        { name: "Manchester", cost: "££", color: "bg-yellow-500" },
        { name: "New York", cost: "£££££", color: "bg-red-600" },
        { name: "Berlin", cost: "££", color: "bg-yellow-500" },
        { name: "Warsaw", cost: "£", color: "bg-green-500" }
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaMoneyBillWave className="text-emerald-600" /> Cost Heatmap
            </h3>

            <div className="space-y-4">
                {cities.map((city, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <span className="font-bold text-slate-700 dark:text-slate-300 w-24">{city.name}</span>
                        <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-700 rounded-full mx-4 overflow-hidden">
                            <div className={`h-full ${city.color}`} style={{ width: `${(city.cost.length / 5) * 100}%` }}></div>
                        </div>
                        <span className="text-xs font-mono text-slate-500">{city.cost}</span>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 flex justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Low</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Med</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> High</span>
            </div>
        </div>
    );
};

export default LivingCostHeatmap;
