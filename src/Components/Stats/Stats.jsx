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
        <div className="py-20 bg-primary/5 dark:bg-slate-900/50">
            <div ref={ref} className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
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
            const incrementTime = Math.floor(duration / end);
            
            // For larger numbers, increment by more than 1 to keep duration constant
            const step = end > 100 ? Math.ceil(end / 100) : 1;
            const timerDuration = end > 100 ? Math.floor(duration / 100) : incrementTime;

            const timer = setInterval(() => {
                start += step;
                if (start > end) start = end;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, timerDuration);

            return () => clearInterval(timer);
        }
    }, [inView, stat.value]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center"
        >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 font-serif">
                {count}{stat.suffix}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">
                {stat.label}
            </p>
        </motion.div>
    );
};

export default Stats;
