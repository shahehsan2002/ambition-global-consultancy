import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiCalendar, FiUser, FiMail, FiPhone } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const BookingModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare data for EmailJS (using the same service/template as Contact form)
        // Note: Ideally, update your EmailJS template to include {{service_interest}} and {{preferred_date}}
        // Or we can append them to the message if needed. For now, sending as separate fields.

        emailjs
            .sendForm(
                "service_ip01f7p",
                "template_eprmst6",
                form.current,
                "2Nawt8tvddfdcFPvx"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: 'Booking Request Sent!',
                        text: 'We will contact you shortly to confirm your appointment.',
                        icon: 'success',
                        confirmButtonColor: '#6366f1'
                    });
                    e.target.reset();
                    setIsSubmitting(false);
                    onClose();
                },
                (error) => {
                    console.log(error.text);
                     Swal.fire({
                        title: "Error",
                        text: "Failed to send booking request. Please try again or call us directly.",
                        icon: "error",
                        confirmButtonColor: "#EF4444"
                    });
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                        >
                            {/* Header */}
                            <div className="bg-primary/5 p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white font-serif">Book Consultation</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Let's discuss your goals</p>
                                </div>
                                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors text-slate-500">
                                    <FiX size={20} />
                                </button>
                            </div>

                            {/* Form */}
                            <form ref={form} onSubmit={handleSubmit} className="p-6 space-y-4">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-3 text-slate-400" />
                                        <input required name="user_name" type="text" placeholder="John Doe" className="input input-bordered w-full pl-10 bg-slate-50 dark:bg-slate-700 dark:text-white" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-3 top-3 text-slate-400" />
                                        <input required name="user_email" type="email" placeholder="john@example.com" className="input input-bordered w-full pl-10 bg-slate-50 dark:bg-slate-700 dark:text-white" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</label>
                                    <div className="relative">
                                        <FiPhone className="absolute left-3 top-3 text-slate-400" />
                                        <input required name="user_phone" type="tel" placeholder="+1 (555) 000-0000" className="input input-bordered w-full pl-10 bg-slate-50 dark:bg-slate-700 dark:text-white" />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Service Interest</label>
                                    <select name="service_interest" className="select select-bordered w-full bg-slate-50 dark:bg-slate-700 dark:text-white">
                                        <option>Student Visa Consultancy</option>
                                        <option>Tourist / Visit Visa</option>
                                        <option>Business Migration</option>
                                        <option>Air Ticketing</option>
                                    </select>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Preferred Date</label>
                                    <div className="relative">
                                        <FiCalendar className="absolute left-3 top-3 text-slate-400" />
                                        <input required name="preferred_date" type="date" className="input input-bordered w-full pl-10 bg-slate-50 dark:bg-slate-700 dark:text-white" />
                                    </div>
                                </div>
                                
                                {/* Hidden message field that effectively combines info if needed, or purely relied on mapped fields */}
                                <input type="hidden" name="message" value="Booking Request" />

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Sending..." : "Confirm Booking"}
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
