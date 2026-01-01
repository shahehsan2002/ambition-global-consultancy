import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const TeamGrid = () => {
    const team = [
        { name: "Sarah Johnson", role: "Senior Consultant (UK)", img: "https://randomuser.me/api/portraits/women/44.jpg" },
        { name: "David Chen", role: "Visa Expert (USA)", img: "https://randomuser.me/api/portraits/men/32.jpg" },
        { name: "Priya Patel", role: "Admissions Head", img: "https://randomuser.me/api/portraits/women/68.jpg" },
        { name: "Michael Ross", role: "Career Counselor", img: "https://randomuser.me/api/portraits/men/45.jpg" }
    ];

    return (
        <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Experts</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-800 dark:text-white">Meet the <span className="text-primary">Minds</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                        Guiding you towards your global ambition with decades of combined experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl">
                            <img src={member.img} alt={member.name} className="w-full h-72 md:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.name}</h3>
                                <p className="text-primary font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{member.role}</p>
                                <div className="flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    <button className="text-white hover:text-primary transition-colors"><FaLinkedin /></button>
                                    <button className="text-white hover:text-primary transition-colors"><FaTwitter /></button>
                                    <button className="text-white hover:text-primary transition-colors"><FaEnvelope /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
