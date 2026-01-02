import PremiumAccordion from "../../../Components/PremiumAccordion/PremiumAccordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowRight } from "react-icons/fi";

const Consultancy = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const faqItems = [
        {
            question: "What assistance do you offer in choosing suitable courses and universities?",
            answer: "Our expert advisors provide personalized consultations to help students choose appropriate courses and select universities that align with their educational goals. We analyze your academic background and career aspirations to match you with the best fit institutions."
        },
        {
            question: "Do you provide guidance on the application process for studying abroad?",
            answer: "Yes, we assist students in navigating the intricacies of the application process, ensuring they understand the requirements and deadlines for their chosen universities. We review personal statements, help with form filling, and ensure all documentation is perfect."
        },
        {
            question: "How do you prepare students for cultural adjustments when studying abroad?",
            answer: "We offer insights into various educational systems and cultural nuances, equipping students with resources to adapt and thrive in a new academic environment. Our pre-departure sessions cover everything from banking to social norms."
        }
    ];

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight leading-[1.1] text-retina">
                        Expert <br />
                        <span className="premium-gradient-text">
                            Student Guidance.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg font-medium">
                        Navigate your academic journey with absolute confidence. Our dedicated consultants are architecting your path to global success, turning your aspirations into reality.
                    </p>
                    
                    <div className="flex flex-wrap gap-6">
                        <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] group">
                            Start Your Application
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3rem] -z-10" />
                    <div className="glass-card p-2 rounded-[3rem]">
                        <PremiumAccordion items={faqItems} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Consultancy;