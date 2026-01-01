import { FaUserGraduate, FaLinkedin, FaUniversity } from 'react-icons/fa';

const AlumniConnect = () => {
    const alumni = [
        { name: "Sarah Ahmed", uni: "University of Manchester", course: "MSc Data Science", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "Rahim Khan", uni: "Coventry University", course: "MBA", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Nadia Islam", uni: "Seneca College", course: "Project Management", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    ];

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaUserGraduate className="text-purple-600" /> Alumni Connect
            </h3>
            
            <div className="space-y-4">
                {alumni.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700 border border-slate-100 dark:border-slate-600 hover:shadow-md transition-shadow">
                        <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-800 dark:text-white">{p.name}</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-300 flex items-center gap-1"><FaUniversity size={10}/> {p.uni}</p>
                            <p className="text-xs text-slate-400">{p.course}</p>
                        </div>
                        <button className="btn btn-circle btn-sm btn-ghost text-blue-600"><FaLinkedin /></button>
                    </div>
                ))}
            </div>
            
            <button className="btn btn-outline w-full mt-6">View All Alumni</button>
        </div>
    );
};

export default AlumniConnect;
