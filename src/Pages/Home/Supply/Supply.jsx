import PremiumAccordion from "../../../Components/PremiumAccordion/PremiumAccordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <div className="py-20 bg-white dark:bg-slate-900 relative">
            <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                 {/* Order change for visual interest: Text on right for this section */}
                <motion.div
                    className="order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                     <PremiumAccordion items={faqItems} />
                </motion.div>

                <motion.div
                    className="order-1 lg:order-2 text-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-800 dark:text-white">
                        Corporate <br />
                        <span className="text-secondary">Solutions</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed ml-auto max-w-lg">
                        Streamline your business travel with our specialized corporate supply services. Efficiency, reliability, and class - delivered to your organization.
                    </p>
                    <button className="btn btn-secondary text-white px-8 rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all">
                        Partner With Us
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Supply;