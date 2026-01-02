import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm Ambition AI. How can I assist you today?", sender: 'bot' }
    ]);
    const [typing, setTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, typing]);

    const faqs = [
        { q: "Visa Requirements", a: "For a student visa, you typically need an acceptance letter, proof of funds, and language proficiency tests like IELTS." },
        { q: "Book Consultation", a: "You can book a free consultation by clicking the 'Book Now' button in the menu!" },
        { q: "Office Locations", a: "We are located at Manru Shopping City, Sylhet. Come visit us!" },
        { q: "Contact Support", a: "You can reach us at ambitionconsultancy21@gmail.com or call +8801718-148790." }
    ];

    const handleSend = (text) => {
        // Add user message
        const userMsg = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);

        // Simulate Bot Typing
        setTyping(true);
        setTimeout(() => {
            const faqMatch = faqs.find(f => f.q === text);
            const botResponse = faqMatch 
                ? faqMatch.a 
                : "Thank you for your message! Our human consultants are currently busy, but please leave your contact details or 'Book Now' for priority service.";
            
            const botMsg = { id: Date.now() + 1, text: botResponse, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
            setTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 lg:right-10 z-[60]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[90vw] sm:w-96 glass rounded-2xl overflow-hidden flex flex-col max-h-[600px] border border-white/20 dark:border-white/10 shadow-2xl backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-primary/90 backdrop-blur-md p-4 flex justify-between items-center text-white border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full ring-1 ring-white/30">
                                    <FiCpu size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold font-serif tracking-wide">Ambition AI</h3>
                                    <p className="text-[10px] uppercase tracking-wider opacity-80 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                                <FiX size={18} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md custom-scrollbar">
                            {messages.map((msg) => (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={msg.id} 
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                        msg.sender === 'user' 
                                        ? 'bg-gradient-to-r from-primary to-blue-600 text-white rounded-br-none' 
                                        : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-bl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {typing && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1.5">
                                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-primary/50 rounded-full" />
                                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-primary/50 rounded-full" />
                                        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-primary/50 rounded-full" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Options */}
                        <div className="p-4 bg-white/80 dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-800 backdrop-blur-md">
                             <div className="flex flex-wrap gap-2">
                                {faqs.map((faq, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => handleSend(faq.q)}
                                        className="text-[11px] font-medium bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all px-3 py-1.5 rounded-full text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 active:scale-95"
                                    >
                                        {faq.q}
                                    </button>
                                ))}
                             </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all z-50"
            >
               <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100"></span>
               {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
