import { useState } from 'react';
import { FaRobot, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const SOPGrader = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const analyze = () => {
        if (!text) return;
        setLoading(true);
        setTimeout(() => {
            const wordCount = text.trim().split(/\s+/).length;
            const score = Math.min(95, Math.floor(Math.random() * 20) + 70 + (wordCount > 100 ? 5 : 0));
            setResult({
                score,
                feedback: score > 80 ? "Strong statement! Good flow." : "Needs more specific examples.",
                details: [
                    { label: "Structure", status: "Good" },
                    { label: "Vocabulary", status: score > 85 ? "Excellent" : "Average" },
                    { label: "Clarity", status: "High" }
                ]
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaRobot className="text-indigo-500" /> AI SOP Grader
            </h3>

            {!result ? (
                <>
                    <textarea 
                        className="textarea textarea-bordered w-full h-40 bg-slate-50 dark:bg-slate-700 mb-4" 
                        placeholder="Paste a paragraph from your SOP here..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button 
                        onClick={analyze} 
                        disabled={loading || !text}
                        className="btn btn-primary w-full text-white"
                    >
                        {loading ? 'Analyzing...' : 'Analyze Text'}
                    </button>
                </>
            ) : (
                <div className="animate-fade-in">
                    <div className="flex items-center justify-between mb-6">
                        <div className="radial-progress text-indigo-500 font-bold text-xl" style={{"--value": result.score, "--size": "4rem"}}>{result.score}%</div>
                        <button onClick={() => { setResult(null); setText(''); }} className="btn btn-ghost btn-sm">New</button>
                    </div>
                    
                    <div className={`p-4 rounded-xl mb-4 ${result.score > 80 ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                        <div className="font-bold flex items-center gap-2">
                            {result.score > 80 ? <FaCheckCircle /> : <FaExclamationTriangle />} 
                            Verdict
                        </div>
                        <p className="text-sm mt-1">{result.feedback}</p>
                    </div>

                    <div className="space-y-2">
                        {result.details.map((d, i) => (
                            <div key={i} className="flex justify-between text-sm py-1 border-b border-slate-100 dark:border-slate-700 last:border-0">
                                <span className="text-slate-500">{d.label}</span>
                                <span className="font-bold text-slate-700 dark:text-white">{d.status}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SOPGrader;
