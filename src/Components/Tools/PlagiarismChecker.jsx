import { useState } from 'react';
import { FaSearch, FaCheck, FaTimesCircle } from 'react-icons/fa';

const PlagiarismChecker = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const check = () => {
        if (!text) return;
        setLoading(true);
        setTimeout(() => {
            const isSafe = Math.random() > 0.3; // Random mock result
            setResult({
                isSafe,
                score: isSafe ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 40) + 20
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaSearch className="text-red-500" /> Plagiarism Check (Mock)
            </h3>
            
            <textarea 
                className="textarea textarea-bordered w-full h-32 bg-slate-50 dark:bg-slate-700 mb-4" 
                placeholder="Paste your essay here..."
                value={text}
                onChange={e => setText(e.target.value)}
            />

            <button 
                onClick={check} 
                disabled={loading || !text}
                className="btn btn-primary w-full"
            >
                {loading ? 'Scanning...' : 'Check Originality'}
            </button>

            {result && (
                <div className={`mt-6 p-4 rounded-xl flex items-center gap-4 ${result.isSafe ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {result.isSafe ? <FaCheck size={24} /> : <FaTimesCircle size={24} />}
                    <div>
                        <h4 className="font-bold">{result.isSafe ? "Likely Original" : "Potential Similarity"}</h4>
                        <p className="text-sm">Similarity Score: {result.score}%</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PlagiarismChecker;
