import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const StandardHero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] overflow-hidden pt-20">
            {/* Ultra-Premium Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 dark:bg-blue-500/10 blur-[140px] rounded-full pointer-events-none animate-pulse duration-[10s]" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                
                {/* Badge / Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 shadow-sm backdrop-blur-xl text-[13px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 group cursor-default">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        World-Class Consultancy
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] text-retina"
                >
                    Build your <br />
                    <span className="premium-gradient-text">
                        global legacy.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 font-medium leading-relaxed"
                >
                    Empowering students and businesses to cross borders with confidence. Expert guidance at every step of your international journey.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-20"
                >
                    <a href="/#services" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 dark:bg-white text-white dark:text-black rounded-full text-lg font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-500 shadow-[0_15px_30px_-10px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] group">
                        Explore Our Expertise
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a href="/#contact" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white rounded-full text-lg font-bold border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-500 backdrop-blur-sm shadow-sm">
                        Speak with a Consultant
                    </a>
                </motion.div>

                {/* Hero Showcase Overlay */}
                 <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01, rotateX: 1 }}
                    style={{ perspective: 1000 }}
                    transition={{ duration: 1.2, delay: 0.7, cubicBezier: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-6xl relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur-2xl opacity-10 dark:opacity-30 animate-pulse duration-[4s]"></div>
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl group">
                         <motion.div 
                            style={{ scale: 1.1 }}
                            whileHover={{ scale: 1.15, y: -10 }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center grayscale"
                         ></motion.div>
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
                         <div className="absolute bottom-12 left-12 text-left">
                             <p className="text-white/60 text-sm font-black tracking-[0.3em] uppercase mb-3">Our Headquarters</p>
                             <h3 className="text-white text-4xl font-bold tracking-tight">Global Operations Hub</h3>
                             <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full"></div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StandardHero;
