import { motion } from "framer-motion";

const ProcessTimeline = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "Deep-dive sessions to architect your global roadmap and define core objectives."
        },
        {
            number: "02",
            title: "Strategy",
            description: "Precision-engineered planning to navigate complex international landscapes."
        },
        {
            number: "03",
            title: "Processing",
            description: "Seamless orchestration of documentation and logistics for total peace of mind."
        },
        {
            number: "04",
            title: "Success",
            description: "Realize your global ambitions with world-class support and zero friction."
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                        Our Engineered <br />
                        <span className="premium-gradient-text">Process Flow.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        A systematic, four-stage methodology designed for efficiency, transparency, and global success.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                {/* Refined Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />

                <div className="space-y-20 md:space-y-32">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                        >
                            {/* Content Section */}
                            <div className="flex-1 text-center md:text-left">
                                <div className={`md:max-w-md ${index % 2 === 0 ? "ml-auto" : "mr-auto md:text-right"}`}>
                                    <span className="text-6xl md:text-8xl font-black text-slate-100 dark:text-white/5 block mb-4 leading-none tracking-tighter">
                                        {step.number}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Interaction Point */}
                            <div className="relative z-10 hidden md:block">
                                <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-primary ring-8 ring-slate-100 dark:ring-white/5 shadow-2xl" />
                            </div>

                            {/* Visual/Image Placeholder Section */}
                            <div className="flex-1 w-full md:block">
                                 <div className={`glass-card aspect-video md:aspect-auto md:h-80 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group/item ${index % 2 !== 0 ? "ml-auto" : "mr-auto"}`}>
                                     <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-400/5 group-hover/item:bg-blue-600/10 transition-colors duration-700"></div>
                                     <div className="w-24 h-24 rounded-3xl bg-white dark:bg-white/10 shadow-2xl flex items-center justify-center text-4xl font-black text-primary/20 rotate-12 group-hover/item:rotate-0 transition-transform duration-700">
                                         {step.number}
                                     </div>
                                 </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessTimeline;
