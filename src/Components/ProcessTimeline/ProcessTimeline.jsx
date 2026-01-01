import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessTimeline = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "We discuss your needs and goals in detail to understand your requirements."
        },
        {
            number: "02",
            title: "Strategy",
            description: "Our experts devise a tailored plan to ensure the best possible outcome."
        },
        {
            number: "03",
            title: "Processing",
            description: "We handle all documentation, applications, and logistical arrangements."
        },
        {
            number: "04",
            title: "Success",
            description: "You achieve your travel or visa goals with zero stress."
        }
    ];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    return (
        <div className="py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white font-serif mb-4">
                        How We <span className="text-primary">Work</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A simple, transparent process designed to get you from planning to destination effortlessly.
                    </p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary dark:hover:border-primary bg-slate-50 dark:bg-slate-900/50 transition-all duration-300"
                        >
                            <div className="text-6xl font-bold text-slate-200 dark:text-slate-700 absolute -top-4 -right-2 transition-colors group-hover:text-primary/10">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 relative z-10">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 relative z-10 text-sm leading-relaxed">
                                {step.description}
                            </p>
                            
                            {/* Connector Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-[50%] -right-4 w-8 h-[2px] bg-slate-200 dark:bg-slate-700 z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessTimeline;
