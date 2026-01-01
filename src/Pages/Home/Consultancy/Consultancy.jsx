import PremiumAccordion from "../../../Components/PremiumAccordion/PremiumAccordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
        <div className="py-20 bg-light dark:bg-dark relative overflow-hidden">
             {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <div ref={ref} className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-slate-800 dark:text-white">
                        Expert Student <br />
                        <span className="text-primary">Consultancy</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        Navigate your academic journey with confidence. Our dedicated consultants are here to guide you every step of the way, turning your dreams of studying abroad into reality.
                    </p>
                    <button className="btn btn-primary text-white px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                        Book a Free Session
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <PremiumAccordion items={faqItems} />
                </motion.div>
            </div>
        </div>
    );
};

export default Consultancy;