import PremiumAccordion from "../../../Components/PremiumAccordion/PremiumAccordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";

const Supply = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const faqItems = [
        {
            question: "What kind of corporate travel solutions do you offer?",
            answer: "We provide comprehensive solutions for executive trips, team-building excursions, seminars, and conferences. Our services include arranging flights, accommodations, and coordinating ground transportation for groups of any size."
        },
        {
            question: "How do your services ensure convenience for businesses?",
            answer: "We handle the complexities of travel logistics, allowing businesses to focus on their core activities. Our dedicated account managers ensure cost-effectiveness, timely bookings, and 24/7 support for travelers."
        },
        {
            question: "Can you manage large corporate travel requirements?",
            answer: "Absolutely. We cater exclusively to corporate needs and are equipped to manage travel arrangements for large groups or complex international events with seamless precision."
        }
    ];

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                {/* Accordion Side */}
                <motion.div
                    className="order-2 lg:order-1"
                    initial={{ opacity: 0, x: -40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                >
                     <div className="glass-card p-2 rounded-[3rem]">
                        <PremiumAccordion items={faqItems} />
                     </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    className="order-1 lg:order-2 lg:text-right flex flex-col lg:items-end"
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight leading-[1.1] text-retina">
                        Corporate <br />
                        <span className="premium-gradient-text">
                            Solutions.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                        Streamline your organization's global mobility with our specialized corporate supply services. Efficiency, reliability, and world-class class — architected for your enterprise.
                    </p>
                    
                    <div className="flex flex-wrap gap-6">
                        <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 shadow-xl hover:shadow-2xl group">
                            Partner with Ambition
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Supply;