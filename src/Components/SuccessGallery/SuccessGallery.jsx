import { motion } from 'framer-motion';
import { FaGraduationCap, FaPlane, FaBriefcase } from 'react-icons/fa';

const SuccessGallery = () => {
    const stories = [
        {
            id: 1,
            name: "Sarah Khan",
            type: "Student Visa",
            destination: "United Kingdom",
            icon: <FaGraduationCap />,
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
            quote: "Ambition Global made my dream of studying in London a reality!"
        },
        {
            id: 2,
            name: "Mr. Ahmed",
            type: "Visit Visa",
            destination: "Canada",
            icon: <FaPlane />,
            image: "https://images.unsplash.com/photo-1516738901171-8eb4fc2ab630?q=80&w=2070&auto=format&fit=crop",
            quote: "Smooth process and excellent guidance for my family trip."
        },
        {
            id: 3,
            name: "Tech Solutions Ltd",
            type: "Business Migration",
            destination: "Dubai",
            icon: <FaBriefcase />,
            image: "https://images.unsplash.com/photo-1554774853-710156d9c1e2?q=80&w=2072&auto=format&fit=crop",
            quote: "Professional handling of our corporate relocation requirements."
        },
        {
            id: 4,
            name: "Priya Das",
            type: "Student Visa",
            destination: "Australia",
            icon: <FaGraduationCap />,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            quote: "I highly recommend their student consultancy services."
        }
    ];

    return (
        <section className="py-24 bg-light dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                     <span className="text-primary font-bold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-800 dark:text-white">
                        Real People, Real <span className="text-primary">Results</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl h-80 shadow-2xl"
                        >
                            {/* Background Image */}
                            <img 
                                src={story.image} 
                                alt={story.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2 text-primary font-bold text-sm uppercase tracking-wide">
                                    {story.icon} {story.type}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                                <p className="text-sm text-slate-300 mb-4">{story.destination}</p>
                                <p className="text-xs italic text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-l-2 border-primary pl-3">
                                    "{story.quote}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessGallery;
