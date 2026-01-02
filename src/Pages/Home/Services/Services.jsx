import { motion } from "framer-motion";
import { FaPlane, FaGraduationCap, FaPassport, FaBriefcase, FaMapMarkerAlt, FaTicketAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    const services = [
        {
          _id: "1",
          service_name: "Employee Travel",
          icon: <FaPlane />,
          description: "Comprehensive corporate travel solutions aimed at cost-effectiveness and comfort.",
        },
        {
          _id: "2",
          service_name: "Student Consultancy",
          icon: <FaGraduationCap />,
          description: "Expert guidance for aspiring students, from course selection to application navigation.",
        },
        {
          _id: "3",
          service_name: "Student Visa",
          icon: <FaPassport />,
          description: "Streamlined visa processing with end-to-end support for a smooth journey.",
        },
        {
          _id: "4",
          service_name: "Work Permit",
          icon: <FaBriefcase />,
          description: "Simplifying employment abroad by navigating complex immigration regulations.",
        },
        {
          _id: "5",
          service_name: "Visit Visa",
          icon: <FaMapMarkerAlt />,
          description: "Hassle-free visa applications for tourism or family visits with expert guidance.",
        },
        {
          _id: "6",
          service_name: "Air Ticket",
          icon: <FaTicketAlt />,
          description: "Seamless domestic and international booking experiences at competitive prices.",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6">
            
            {/* Section Header */}
            <div className="text-center mb-16">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                 >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                        Our Expertise. <br />
                        <span className="premium-gradient-text">Tailored for your journey.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Comprehensive solutions designed to meet your global ambitions with technical precision and unparalleled care.
                    </p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
                        onClick={() => navigate(`/item/${service.service_name.replace(/\s+/g, '-').toLowerCase()}`)}
                        className="glass-card group p-10 rounded-[2.5rem] cursor-pointer relative overflow-hidden flex flex-col items-start"
                        role="button"
                        aria-label={`Learn more about ${service.service_name}`}
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700"></div>

                        {/* Icon Container */}
                        <div className="w-16 h-16 rounded-[1.25rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-3xl mb-8 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_30px_-5px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {service.service_name}
                        </h3>
                        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 font-medium">
                            {service.description}
                        </p>

                        {/* Link Arrow */}
                        <div className="mt-auto flex items-center gap-2 text-sm font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                            Explore Service <FaArrowRight className="text-xs" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
