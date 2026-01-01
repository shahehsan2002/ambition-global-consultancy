import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
            confirmButtonColor: "#6366f1"
          });
          form.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error",
            text: "Message failed to send.",
            icon: "error",
            confirmButtonColor: "#EF4444"
          });
          setIsSubmitting(false);
        }
      );
  };

  const socialLinks = [
    { icon: <FaWhatsapp />, label: "WhatsApp", link: "https://wa.me/+8801718148790", color: "text-green-500" },
    { icon: <FaFacebook />, label: "Facebook", link: "https://www.facebook.com/ambitionconsultancy", color: "text-blue-600" },
  ];

  const contactInfo = [
    { icon: <MdEmail />, title: "Email", value: "ambitionconsultancy21@gmail.com", color: "bg-blue-100 text-blue-600" },
    { icon: <MdPhone />, title: "Phone", value: "+8801718-148790", color: "bg-green-100 text-green-600" },
    { icon: <MdLocationOn />, title: "Address", value: "348, Manru Shopping City, 2nd Floor, Chowhatta, Sylhet-3100, Bangladesh", color: "bg-red-100 text-red-600" },
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-dark pt-24 pb-12 transition-colors duration-300 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h1 className="text-5xl font-bold mb-4 font-serif text-slate-800 dark:text-white">
                Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                Have questions about your journey? We're here to help you navigate your path to success.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700/50 hover:shadow-xl transition-shadow duration-300">
                        <div className={`p-4 rounded-full text-2xl mr-6 ${item.color}`}>
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-medium">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
             <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl border border-white/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 text-center">Connect Locally</h3>
                <div className="flex justify-center gap-8">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index} 
                            href={social.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div className={`text-4xl ${social.color} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                                {social.icon}
                            </div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">{social.label}</span>
                        </a>
                    ))}
                </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl border border-slate-100 dark:border-slate-700/50"
          >
            <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Send us a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                    <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                    <input
                    type="tel"
                    name="user_phone"
                    placeholder="+123..."
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    required
                    />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
