import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const EligibilityChecker = () => {
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOption = (points) => {
        setScore(score + points);
        if (step < 3) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setStep(1);
        setScore(0);
        setShowResult(false);
    };

    const getResult = () => {
        if (score >= 25) return { text: "High Probability", color: "text-green-500", icon: <FaCheckCircle />, advice: "Your profile looks excellent! Book a consultation to start your application." };
        if (score >= 15) return { text: "Moderate Probability", color: "text-yellow-500", icon: <FaExclamationCircle />, advice: "You have a good chance, but we need to optimize your documents." };
        return { text: "Consultation Needed", color: "text-red-500", icon: <FaExclamationCircle />, advice: "We need to discuss specific strategies to improve your chances." };
    };

    const questions = [
        {
            id: 1,
            question: "What is your highest educational qualification?",
            options: [
                { text: "Masters / PhD", points: 10 },
                { text: "Bachelors Degree", points: 8 },
                { text: "High School / Diploma", points: 5 },
                { text: "Other", points: 2 }
            ]
        },
        {
            id: 2,
            question: "Do you have an English Proficiency Score (IELTS/PTE)?",
            options: [
                { text: "Yes, 6.5 or above", points: 10 },
                { text: "Yes, 5.5 - 6.0", points: 7 },
                { text: "Yes, below 5.5", points: 3 },
                { text: "No, not yet", points: 0 }
            ]
        },
        {
            id: 3,
            question: "Do you have financial sponsors/support?",
            options: [
                { text: "Yes, fully sponsored", points: 10 },
                { text: "Partially / Self", points: 7 },
                { text: "Not sure yet", points: 3 }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 dark:border-slate-700">
                    <div className="text-center mb-10">
                        <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">AI Tool</span>
                        <h2 className="text-3xl font-bold mt-4 text-slate-800 dark:text-white">Visa Eligibility Checker</h2>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Answer 3 quick questions to see your chances.</p>
                    </div>

                    <div className="min-h-[300px] flex items-center justify-center">
                        <AnimatePresence mode='wait'>
                            {!showResult ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="w-full max-w-lg"
                                >
                                    <div className="mb-6 flex justify-between text-sm font-semibold text-slate-400">
                                        <span>Question {step} of 3</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                                        {questions[step - 1].question}
                                    </h3>
                                    <div className="space-y-3">
                                        {questions[step - 1].options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOption(opt.points)}
                                                className="w-full text-left p-4 rounded-xl bg-white dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary shadow-sm hover:shadow-md transition-all duration-300 font-medium text-slate-700 dark:text-slate-200"
                                            >
                                                {opt.text}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center w-full"
                                >
                                    <div className={`text-6xl mb-4 ${getResult().color} flex justify-center`}>
                                        {getResult().icon}
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-2 ${getResult().color}`}>
                                        {getResult().text}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
                                        {getResult().advice}
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <button onClick={reset} className="btn btn-outline">Check Again</button>
                                        <button className="btn btn-primary">Book Consultation</button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EligibilityChecker;
