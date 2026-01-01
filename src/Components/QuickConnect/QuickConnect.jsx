import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const QuickConnect = () => {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
            {/* Phone Button */}
            <motion.a
                href="tel:+1234567890"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-blue-600/50 transition-shadow"
                title="Call Us"
            >
                <FaPhoneAlt size={24} />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ delay: 0.1 }}
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:shadow-green-500/50 transition-shadow relative"
                title="Chat on WhatsApp"
            >
                <FaWhatsapp size={28} />
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </motion.a>
        </div>
    );
};

export default QuickConnect;
