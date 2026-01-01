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
        <div className="fixed bottom-6 right-24 z-40">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-2 rounded-full">
                                    <FiCpu size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Ambition AI</h3>
                                    <p className="text-xs opacity-80">Online | Instant Support</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                                <FiX size={20} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                        msg.sender === 'user' 
                                        ? 'bg-primary text-white rounded-br-none' 
                                        : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-bl-none shadow-sm'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {typing && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-slate-400 rounded-full" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Options */}
                        <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                             <div className="flex flex-wrap gap-2 mb-3">
                                {faqs.map((faq, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => handleSend(faq.q)}
                                        className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors px-3 py-1 rounded-full text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/30 hover:bg-indigo-600 transition-colors flex items-center justify-center"
            >
               {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default AIChatbot;
