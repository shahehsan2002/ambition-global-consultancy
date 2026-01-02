import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats = [
        { label: "Happy Clients", value: 500, suffix: "+" },
        { label: "Countries Served", value: 20, suffix: "+" },
        { label: "Years Experience", value: 10, suffix: "+" },
        { label: "Success Rate", value: 98, suffix: "%" },
    ];

    return (
        <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {stats.map((stat, index) => (
                    <StatItem key={index} stat={stat} inView={inView} index={index} />
                ))}
            </div>
        </div>
    );
};

const StatItem = ({ stat, inView, index }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const incrementTime = Math.floor(duration / 100);
            const step = Math.ceil(end / 100);

            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                setCount(start);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [inView, stat.value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.1, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="text-center p-8 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 hover:shadow-2xl transition-all duration-700 group"
        >
            <h3 className="text-6xl md:text-7xl font-extrabold mb-3 tracking-tighter text-retina transition-transform duration-500 group-hover:scale-105">
                <span className="premium-gradient-text">
                    {count}{stat.suffix}
                </span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
                {stat.label}
            </p>
        </motion.div>
    );
};

export default Stats;
