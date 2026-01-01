import { useState } from 'react';
import { FaCompass, FaArrowRight, FaLightbulb } from 'react-icons/fa';

const CareerPathfinder = () => {
    const [history, setHistory] = useState([]);
    const [currentStep, setCurrentStep] = useState('start');

    const tree = {
        start: {
            question: "What reflects your main interest?",
            options: [
                { label: "Building & Fixing Things", next: "tech_eng" },
                { label: "Helping People & Healthcare", next: "health" },
                { label: "Money & Management", next: "biz" },
                { label: "Creativity & Design", next: "arts" }
            ]
        },
        tech_eng: {
            question: "Do you prefer software or physical structures?",
            options: [
                { label: "Software & Logic", result: "Computer Science / AI" },
                { label: "Physical Structures", result: "Civil Engineering" },
                { label: "Electronics & Gadgets", result: "Electrical Engineering" }
            ]
        },
        health: {
            question: "Do you want to work directly with patients?",
            options: [
                { label: "Yes, treating them", result: "Nursing / Medicine" },
                { label: "No, in a lab/research", result: "Biomedical Science" },
                { label: "Mental Health focus", result: "Psychology" }
            ]
        },
        biz: {
            question: "Are you more into numbers or people?",
            options: [
                { label: "Numbers & Data", result: "Accounting / Finance" },
                { label: "People & Strategy", result: "Business Management / HR" },
                { label: "Trends & Promotion", result: "Marketing" }
            ]
        },
        arts: {
            question: "Visual or text based?",
            options: [
                { label: "Visual Design", result: "Graphic Design / UI/UX" },
                { label: "Fashion & Trends", result: "Fashion Design" },
                { label: "Writing & Media", result: "Journalism / Media" }
            ]
        }
    };

    const handleOption = (option) => {
        if (option.result) {
            setCurrentStep({ result: option.result });
        } else {
            setHistory([...history, currentStep]);
            setCurrentStep(option.next);
        }
    };

    const reset = () => {
        setHistory([]);
        setCurrentStep('start');
    };

    const currentData = typeof currentStep === 'string' ? tree[currentStep] : null;

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaCompass className="text-purple-500" /> Career Pathfinder
            </h3>

            {currentData ? (
                <div className="animate-fade-in">
                    <h4 className="text-lg font-semibold mb-6 text-slate-700 dark:text-slate-200 min-h-[60px]">{currentData.question}</h4>
                    <div className="space-y-3">
                        {currentData.options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOption(opt)}
                                className="w-full flex justify-between items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 transition-all font-medium text-left"
                            >
                                {opt.label}
                                <FaArrowRight className="text-slate-400" />
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center animate-slide-up py-8">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 text-3xl">
                        <FaLightbulb />
                    </div>
                    <p className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-2">We Suggest</p>
                    <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">{currentStep.result}</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">This field aligns well with your interests. We can help you find the best universities for this.</p>
                    <button onClick={reset} className="btn btn-outline w-full">Start Over</button>
                </div>
            )}
            
            {history.length > 0 && currentData && (
                 <button onClick={reset} className="btn btn-ghost btn-sm w-full mt-6 text-slate-400">Restart</button>
            )}
        </div>
    );
};

export default CareerPathfinder;
