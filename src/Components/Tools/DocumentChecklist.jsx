import { useState } from 'react';
import { FaDownload, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DocumentChecklist = () => {
    const [visaType, setVisaType] = useState('Student');
    const [checkedItems, setCheckedItems] = useState({});

    const lists = {
        'Student': [
            "Valid Passport (6+ months validity)",
            "Academic Transcripts & Certificates",
            "English Language Test Report (IELTS/PTE)",
            "University Offer Letter (CAS/I-20)",
            "Proof of Funds / Bank Statements",
            "Statement of Purpose (SOP)",
            "Passport Sized Photographs"
        ],
        'Tourist': [
            "Valid Passport",
            "Completed Visa Application Form",
            "Round Trip Flight Itinerary",
            "Hotel Booking Confirmation",
            "Proof of Financial Means",
            "Employment Leave Letter",
            "Cover Letter explaining trip purpose"
        ],
        'Business': [
            "Valid Passport",
            "Invitation Letter from Company",
            "Company Bank Statements",
            "Trade License & Business Registration",
            "Conference/Event Registration Proof",
            "Tax Returns (last 2 years)"
        ]
    };

    const toggleItem = (item) => {
        setCheckedItems(prev => ({
            ...prev,
            [item]: !prev[item]
        }));
    };

    const currentList = lists[visaType];
    const progress = Math.round((currentList.filter(item => checkedItems[item]).length / currentList.length) * 100);

    const handleDownload = async () => {
        // Dynamic import to avoid SSR issues if any, though standard import works in Vite
        const { jsPDF } = await import('jspdf');
        
        const doc = new jsPDF();
        
        // --- Header ---
        doc.setFillColor(79, 70, 229); // Primary Color (Indigo-600)
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.text("Ambition Global Consultancy", 20, 20);
        doc.setFontSize(12);
        doc.text("Your Success Partner", 20, 30);
        
        // --- Title ---
        doc.setTextColor(33, 33, 33);
        doc.setFontSize(18);
        doc.text(`${visaType} Visa Checklist`, 20, 60);
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 66);
        
        // --- Content Lines ---
        let yPos = 80;
        
        // Completed Items
        doc.setFontSize(14);
        doc.setTextColor(34, 197, 94); // Green
        doc.text("Completed Documents", 20, yPos);
        yPos += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        const selected = currentList.filter(item => checkedItems[item]);
        
        if (selected.length === 0) {
            doc.text("- No items marked as complete yet.", 25, yPos);
            yPos += 8;
        } else {
            selected.forEach(item => {
                doc.text(`[OK] ${item}`, 25, yPos);
                yPos += 8;
            });
        }
        
        yPos += 10;
        
        // Pending Items
        doc.setFontSize(14);
        doc.setTextColor(239, 68, 68); // Red
        doc.text("Pending Documents", 20, yPos);
        yPos += 10;
        
        doc.setFontSize(11);
        doc.setTextColor(60, 60, 60);
        const pending = currentList.filter(item => !checkedItems[item]);
        
         if (pending.length === 0) {
            doc.text("- All good! You are ready to apply.", 25, yPos);
            yPos += 8;
        } else {
            pending.forEach(item => {
                doc.text(`[  ] ${item}`, 25, yPos);
                yPos += 8;
            });
        }
        
        // --- Footer ---
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text("Contact us for help: +8801718-148790 | ambitionconsultancy21@gmail.com", 105, 280, { align: "center" });
        
        doc.save(`${visaType}_Visa_Checklist.pdf`);
    };

    return (
        <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                     <span className="text-secondary font-bold tracking-wider uppercase text-sm">Smart Tools</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-800 dark:text-white">
                        Document <span className="text-secondary">Butler</span>
                    </h2>
                     <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
                        Never miss a required document again. Select your visa type and track your progress.
                    </p>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-inner border border-slate-200 dark:border-slate-700">
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        {Object.keys(lists).map(type => (
                            <button
                                key={type}
                                onClick={() => { setVisaType(type); setCheckedItems({}); }}
                                className={`px-6 py-2 rounded-full font-bold transition-all ${
                                    visaType === type 
                                    ? 'bg-secondary text-white shadow-lg shadow-secondary/30' 
                                    : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                                }`}
                            >
                                {type} Visa
                            </button>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-4 rounded-full mb-8 overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="bg-secondary h-full rounded-full transition-all duration-500"
                        />
                    </div>
                    <div className="text-right text-sm font-bold text-secondary mb-8">{progress}% Ready</div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {currentList.map((item, idx) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => toggleItem(item)}
                                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border transition-all ${
                                    checkedItems[item]
                                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-secondary'
                                }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${
                                    checkedItems[item] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'
                                }`}>
                                    {checkedItems[item] && <FaCheck size={12} />}
                                </div>
                                <span className={`font-medium ${checkedItems[item] ? 'text-green-700 dark:text-green-300 line-through opacity-75' : 'text-slate-700 dark:text-slate-200'}`}>
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button 
                            onClick={handleDownload}
                            className="btn btn-secondary gap-2 text-white px-8 rounded-full shadow-lg hover:shadow-secondary/50"
                        >
                            <FaDownload /> Download Checklist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DocumentChecklist;
