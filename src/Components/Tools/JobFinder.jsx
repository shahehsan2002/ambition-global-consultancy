import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const JobFinder = () => {
    const jobs = [
        { title: "Barista", loc: "London", wage: "£11/hr", type: "Part-time" },
        { title: "Library Assistant", loc: "Manchester", wage: "£10.50/hr", type: "On-Campus" },
        { title: "Admin Intern", loc: "Remote", wage: "£12/hr", type: "Flexible" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaBriefcase className="text-teal-500" /> Student Jobs
            </h3>
            
            <div className="space-y-3">
                {jobs.map((j, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600">
                        <div>
                            <h4 className="font-bold text-slate-800 dark:text-white text-sm">{j.title}</h4>
                            <div className="flex gap-2 text-xs text-slate-500 mt-1">
                                <span className="flex items-center gap-1"><FaMapMarkerAlt size={10}/> {j.loc}</span>
                                <span className="flex items-center gap-1"><FaClock size={10}/> {j.type}</span>
                            </div>
                        </div>
                        <div className="text-right">
                             <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-2 py-1 rounded text-xs font-bold">{j.wage}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <button className="btn btn-outline btn-sm w-full mt-6 text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white">Broadcaster Job Alert</button>
        </div>
    );
};

export default JobFinder;
