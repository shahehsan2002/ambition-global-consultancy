import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaSyncAlt, FaArrowRight } from 'react-icons/fa';

const InterviewSimulator = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [qIndex, setQIndex] = useState(0);

    const questions = [
        { q: "Why did you choose this university?", tip: "Mention specific ranking, modules, professors, and campus facilities. Don't just say 'it's good'." },
        { q: "Why this country over your home country?", tip: "Focus on the practical exposure, global recognition, and specific teaching methods not available locally." },
        { q: "Who is sponsoring your studies?", tip: "Be clear. 'My father, who is a [Job Title] with an annual income of [Amount]'." },
        { q: "What are your future career plans?", tip: "Show a clear intent to return home. 'I plan to return and work as a [Role] at companies like [X, Y]'." },
        { q: "Do you have any relatives in this country?", tip: "Answer honestly. If yes, state clearly that you will not stay with them if that is the case (unless permitted)." }
    ];

    const nextQuestion = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setQIndex((prev) => (prev + 1) % questions.length);
        }, 300);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaUserTie className="text-secondary" /> Interview Prep
            </h3>

            <div className="flex-grow perspective-1000 relative min-h-[300px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
                <motion.div
                    className="w-full h-full absolute preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden bg-slate-50 dark:bg-slate-700/50 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-inner">
                        <span className="text-xs uppercase font-bold text-secondary mb-4 tracking-widest">Question {qIndex + 1}</span>
                        <h4 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight">
                            "{questions[qIndex].q}"
                        </h4>
                        <p className="mt-8 text-sm text-slate-400 font-medium animate-pulse">Tap to see Pro Tip</p>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden bg-secondary text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl rotate-y-180">
                        <span className="text-xs uppercase font-bold text-white/70 mb-4 tracking-widest">Expert Advice</span>
                        <p className="text-lg font-medium leading-relaxed">
                            {questions[qIndex].tip}
                        </p>
                    </div>
                </motion.div>
            </div>

            <button onClick={(e) => { e.stopPropagation(); nextQuestion(); }} className="mt-6 btn btn-outline w-full gap-2">
                Next Question <FaArrowRight />
            </button>
        </div>
    );
};

export default InterviewSimulator;
