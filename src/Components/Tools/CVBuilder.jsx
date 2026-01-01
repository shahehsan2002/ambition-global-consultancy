import { useState } from 'react';
import { FaFileAlt, FaDownload, FaUserGraduate } from 'react-icons/fa';

const CVBuilder = () => {
    const [details, setDetails] = useState({
        name: '',
        education: '',
        research: '',
        skills: ''
    });

    const handleChange = (e) => setDetails({ ...details, [e.target.name]: e.target.value });

    const generateCV = async () => {
        const { jsPDF } = await import('jspdf');
        const doc = new jsPDF();

        // Header
        doc.setFillColor(55, 65, 81); // Dark Gray
        doc.rect(0, 0, 210, 35, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text(details.name.toUpperCase() || "YOUR NAME", 20, 20);
        doc.setFontSize(10);
        doc.text("Academic Curriculum Vitae", 20, 28);

        let y = 50;
        doc.setTextColor(33, 33, 33);

        const addSection = (title, content) => {
            doc.setFontSize(14);
            doc.setTextColor(55, 65, 81);
            doc.text(title.toUpperCase(), 20, y);
            doc.setDrawColor(200, 200, 200);
            doc.line(20, y + 2, 190, y + 2);
            y += 10;
            
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);
            const lines = doc.splitTextToSize(content || "N/A", 170);
            doc.text(lines, 20, y);
            y += (lines.length * 6) + 10;
        };

        addSection("Education", details.education);
        addSection("Research Interests & Projects", details.research);
        addSection("Skills & Languages", details.skills);

        doc.save(`${details.name}_Academic_CV.pdf`);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaFileAlt className="text-blue-600" /> Academic CV Builder
            </h3>
            
            <div className="space-y-4">
                <div>
                     <label className="label font-bold text-slate-600 dark:text-slate-300">Full Name</label>
                     <input name="name" onChange={handleChange} className="input input-bordered w-full bg-slate-50 dark:bg-slate-700" placeholder="John Doe" />
                </div>
                <div>
                     <label className="label font-bold text-slate-600 dark:text-slate-300">Education History</label>
                     <textarea name="education" onChange={handleChange} className="textarea textarea-bordered w-full h-24 bg-slate-50 dark:bg-slate-700" placeholder="BSc in Computer Science, University of X (2020-2024)..." />
                </div>
                <div>
                     <label className="label font-bold text-slate-600 dark:text-slate-300">Research & Projects</label>
                     <textarea name="research" onChange={handleChange} className="textarea textarea-bordered w-full h-24 bg-slate-50 dark:bg-slate-700" placeholder="Final Year Project: AI in Healthcare..." />
                </div>
                <div>
                     <label className="label font-bold text-slate-600 dark:text-slate-300">Skills</label>
                     <textarea name="skills" onChange={handleChange} className="textarea textarea-bordered w-full h-20 bg-slate-50 dark:bg-slate-700" placeholder="Python, React, Academic Writing..." />
                </div>
                
                <button onClick={generateCV} className="btn btn-primary w-full gap-2 mt-4 text-white">
                    <FaDownload /> Generate PDF CV
                </button>
            </div>
        </div>
    );
};

export default CVBuilder;
