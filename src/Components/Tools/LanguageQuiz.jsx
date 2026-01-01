import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLanguage, FaCheck, FaRedo } from 'react-icons/fa';

const LanguageQuiz = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const questions = [
        { q: "Select the synonym for 'Ambitious'", options: ["Lazy", "Determined", "Happy", "Sad"], a: 1 },
        { q: "Which sentence is correct?", options: ["He go to school.", "He goes to school.", "He going to school."], a: 1 },
        { q: "What is the past tense of 'Run'?", options: ["Running", "Runned", "Ran", "Run"], a: 2 },
        { q: "Choose the correct preposition: Good ___ Math", options: ["In", "At", "On", "With"], a: 1 },
        { q: "Antonym of 'Frequently'", options: ["Often", "Rarely", "Always", "Regularly"], a: 1 }
    ];

    const handleAnswer = (idx) => {
        if (idx === questions[step].a) setScore(score + 1);
        
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    const reset = () => {
        setStep(0);
        setScore(0);
        setShowResult(false);
    };

    const getLevel = () => {
        if (score === 5) return "C1 (Advanced)";
        if (score >= 3) return "B2 (Upper Intermediate)";
        return "B1 (Intermediate)";
    };

    return (
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden h-full flex flex-col justify-center">
             {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FaLanguage /> 1-Min English Test
            </h3>

            <AnimatePresence mode='wait'>
                {!showResult ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <p className="text-sm opacity-75 mb-2">Question {step + 1} / {questions.length}</p>
                        <h4 className="text-xl font-bold mb-6">{questions[step].q}</h4>
                        <div className="space-y-3">
                            {questions[step].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className="w-full text-left p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 text-sm font-medium"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-white/50">
                            {score}/{questions.length}
                        </div>
                        <p className="text-lg opacity-90 mb-1">Estimated Level:</p>
                        <h2 className="text-3xl font-bold mb-6 text-yellow-300">{getLevel()}</h2>
                        
                        <button onClick={reset} className="btn bg-white text-primary border-none hover:bg-slate-100 gap-2 w-full">
                            <FaRedo /> Try Again
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageQuiz;
