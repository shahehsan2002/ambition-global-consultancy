import { motion } from "framer-motion";

const TeamGrid = () => {
    const team = [
        { 
            name: "Sarah Johnson", 
            role: "Senior Consultant (UK)", 
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio_short: "Specialist in UK student visa regulations with 10+ years of experience.",
            quote: "Your ambition is my blueprint."
        },
        { 
            name: "David Chen", 
            role: "Visa Expert (USA)", 
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio_short: "Expert in US immigration policies and scholarship opportunities.",
            quote: "Dream big, we handle the paperwork."
        },
        { 
            name: "Priya Patel", 
            role: "Admissions Head", 
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            bio_short: "Helping students get into Ivy League and top-tier universities.",
            quote: "Education opens the door to the world."
        },
        { 
            name: "Michael Ross", 
            role: "Career Counselor", 
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            bio_short: "Guiding careers towards global markets and opportunities.",
            quote: "Success is a journey, not a destination."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="group"
                    role="listitem"
                    aria-label={`Team member ${member.name}`}
                >
                    <div className="glass-card p-4 rounded-[3rem] h-full flex flex-col transition-all duration-700 hover:-translate-y-2">
                        <div className="relative h-80 overflow-hidden rounded-[2.25rem] mb-8">
                            <img 
                                src={member.image} 
                                alt={`${member.name} - ${member.role} at Ambition Global`}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700 flex items-end p-8">
                                <p className="text-white text-base italic font-medium leading-relaxed">"{member.quote}"</p>
                            </div>
                        </div>
                        
                        <div className="px-4 pb-4">
                             <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{member.name}</h3>
                             <p className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-6">{member.role}</p>
                             <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium line-clamp-3 text-retina">
                                 {member.bio_short}
                             </p>
                        </div>
                        
                        <div className="mt-auto px-4 pb-4 pt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            {/* Potential Social Links Placeholder */}
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
                                <span className="text-xs font-bold uppercase">In</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TeamGrid;
