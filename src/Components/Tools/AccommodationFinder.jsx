import { useState } from 'react';
import { FaHome, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const AccommodationFinder = () => {
    const [city, setCity] = useState('London');

    // Mock Data
    const listings = [
        { name: "Chapter Spitalfields", city: "London", price: "£350/pw", type: "Studio", rating: 4.8, img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Vita Student Circle", city: "Manchester", price: "£280/pw", type: "En-suite", rating: 4.9, img: "https://images.unsplash.com/photo-1522771753033-6a9a695a1ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Scrimshaw House", city: "London", price: "£210/pw", type: "Shared", rating: 4.5, img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
        { name: "Unite Students", city: "Birmingham", price: "£160/pw", type: "Cluster", rating: 4.2, img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    ];

    const filtered = listings.filter(l => city === 'All' || l.city === city);

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaHome className="text-orange-500" /> Accommodation Finder
            </h3>

             <div className="flex gap-2 mb-6">
                {['London', 'Manchester', 'Birmingham'].map(c => (
                     <button 
                        key={c}
                        onClick={() => setCity(c)}
                        className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${
                            city === c 
                            ? 'bg-orange-500 text-white' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {filtered.map((item, idx) => (
                    <div key={idx} className="group rounded-xl overflow-hidden border border-slate-100 dark:border-slate-600 hover:shadow-lg transition-all relative">
                        <div className="h-32 overflow-hidden">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="p-4 bg-white dark:bg-slate-700">
                             <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-slate-800 dark:text-white truncate pr-2">{item.name}</h4>
                                <div className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">
                                    <FaStar /> {item.rating}
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mb-2">
                                <FaMapMarkerAlt /> {item.city}
                            </p>
                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100 dark:border-slate-600">
                                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-600 text-slate-600 dark:text-slate-300">{item.type}</span>
                                <span className="font-bold text-slate-800 dark:text-white">{item.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             <button className="w-full mt-6 btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                View All Listings
            </button>
        </div>
    );
};

export default AccommodationFinder;
