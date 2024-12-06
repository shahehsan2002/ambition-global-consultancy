import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [showScroll, setShowScroll] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
          Swal.fire("Success", "Message sent successfully!", "success");
        },
        (error) => {
          console.log(error.text);
          Swal.fire("Error", "Message failed to send.", "error");
        }
      );
    form.current.reset();
  };

  // Scroll to Top Logic
  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-50 via-white to-gray-200 relative">
      <motion.p
        className="text-5xl pt-28 text-center font-bold text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.p>

      {/* Form Section */}
      <motion.div
        className="border rounded-md p-6 w-full md:w-3/4 lg:w-1/2 mb-10 shadow-lg bg-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Send us a message
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label className="block font-semibold text-gray-600">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-300"
            required
          />
          <label className="block font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-300"
            required
          />
          <label className="block font-semibold text-gray-600">
            Phone Number
          </label>
          <input
            type="tel"
            name="user_phone"
            placeholder="Enter your phone number"
            className="border rounded-md py-2 px-4 w-full focus:ring-2 focus:ring-blue-300"
            required
          />
          <label className="block font-semibold text-gray-600">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            className="border rounded-md py-2 px-4 w-full resize-none focus:ring-2 focus:ring-blue-300"
            rows="4"
            required
          ></textarea>
          <motion.input
            type="submit"
            value="Send"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </form>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div
        className="border rounded-md p-6 w-full md:w-3/4 lg:w-2/3 mb-8 shadow-lg bg-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Contact Details
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <MdEmail className="text-blue-500" size={32} />
            <span className="text-gray-600">Email</span>
            <span className="font-medium text-gray-700">
              ambitionconsultancy21@gmail.com
            </span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <MdPhone className="text-blue-500" size={32} />
            <span className="text-gray-600">Phone</span>
            <span className="font-medium text-gray-700">+8801718-148790</span>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <MdLocationOn className="text-blue-500" size={32} />
            <span className="text-gray-600">Address</span>
            <span className="font-medium text-gray-700">
              348, Manru Shopping City, 2nd Floor, Chowhatta, Sylhet-3100,
              Bangladesh
            </span>
          </div>
        </div>
      </motion.div>

      {/* Additional Contact Options */}
      <motion.div
        className="border rounded-md p-6 w-full md:w-3/4 lg:w-2/3 mb-8 shadow-lg bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Reach Us Through
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="font-medium text-gray-700">WhatsApp</span>
            <a
              href="https://wa.me/+8801718148790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:scale-105 transition-transform"
            >
              Chat with us on WhatsApp
            </a>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <span className="font-medium text-gray-700">Facebook</span>
            <a
              href="https://www.facebook.com/ambitionconsultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline hover:scale-105 transition-transform"
            >
              Visit our Facebook Page
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Contact;
