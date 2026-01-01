import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaUniversity, FaMapMarkerAlt } from 'react-icons/fa';

const UniversitySearch = () => {
    const [search, setSearch] = useState('');
    const [countryFilter, setCountryFilter] = useState('All');

    const universities = [
        { name: "University of Oxford", country: "UK", courses: 50, image: "https://images.unsplash.com/photo-1548263594-a71ea65a857c?auto=format&fit=crop&q=80&w=200"},
        { name: "University of Toronto", country: "Canada", courses: 120, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=200"},
        { name: "Harvard University", country: "USA", courses: 80, image: "https://images.unsplash.com/photo-1622397333309-3056849bc70b?auto=format&fit=crop&q=80&w=200"},
        { name: "University of Melbourne", country: "Australia", courses: 95, image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=200"},
        { name: "King's College London", country: "UK", courses: 65, image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=200"},
        { name: "McGill University", country: "Canada", courses: 100, image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200"},
    ];

    const filteredUnis = universities.filter(uni => 
        (countryFilter === 'All' || uni.country === countryFilter) &&
        uni.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="py-24 bg-light dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                     <span className="text-primary font-bold tracking-wider uppercase text-sm">Global Network</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-800 dark:text-white">
                        Global <span className="text-primary">Campus Finder</span>
                    </h2>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-4 top-4 text-slate-400" />
                        <input 
                            type="text" 
                            placeholder="Search University..." 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" 
                        />
                    </div>
                    <select 
                        value={countryFilter}
                        onChange={(e) => setCountryFilter(e.target.value)}
                        className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none"
                    >
                        <option value="All">All Countries</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredUnis.map((uni, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
                        >
                            <div className="h-40 overflow-hidden relative">
                                <img src={uni.image} alt={uni.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 dark:text-white flex items-center gap-1">
                                    <FaMapMarkerAlt className="text-primary" /> {uni.country}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-start gap-2">
                                    <FaUniversity className="text-slate-400 mt-1 flex-shrink-0" />
                                    {uni.name}
                                </h3>
                                <p className="text-slate-500 text-sm mb-4">{uni.courses}+ Courses Available</p>
                                <button className="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {filteredUnis.length === 0 && (
                     <div className="text-center text-slate-500 py-12">
                        No universities found matching your criteria.
                     </div>
                )}
            </div>
        </section>
    );
};

export default UniversitySearch;
