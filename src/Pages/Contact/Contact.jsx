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
    <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
       {/* Standard Background Decoration */}
       <div className="absolute top-0 right-0 w-full h-full -z-10 bg-slate-50 dark:bg-slate-900 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
       </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
      >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-[1.1] text-retina">
              Get in <br />
              <span className="premium-gradient-text">Touch.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about your global journey? We're here to architect your path to success. Reach out to our expert team.
          </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Contact Intelligence Side */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-12"
        >
          {/* Info Composition */}
          <div className="grid gap-8">
              {contactInfo.map((item, index) => (
                  <div key={index} className="glass-card flex items-center p-8 rounded-[2.5rem] group hover:-translate-y-1">
                      <div className={`p-5 rounded-2xl text-2xl mr-8 shadow-xl transition-all duration-500 group-hover:scale-110 ${item.color}`}>
                          {item.icon}
                      </div>
                      <div>
                          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">{item.title}</h3>
                          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.value}</p>
                      </div>
                  </div>
              ))}
          </div>

          {/* Localized Connection */}
           <div className="p-12 glass-card rounded-[3rem] border border-white/20">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10 text-center tracking-tight">Connect Locally</h3>
              <div className="flex justify-center gap-16">
                  {socialLinks.map((social, index) => (
                      <a 
                          key={index} 
                          href={social.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Contact us on ${social.label}`}
                          className="flex flex-col items-center gap-4 group"
                      >
                          <div className={`text-5xl ${social.color} transform transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 drop-shadow-2xl`}>
                              {social.icon}
                          </div>
                          <span className="text-xs font-black tracking-[0.2em] uppercase text-slate-400 group-hover:text-primary transition-colors">{social.label}</span>
                      </a>
                  ))}
              </div>
          </div>
        </motion.div>

        {/* Transmission Side */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-12 lg:order-last xl:col-span-7 xl:order-none"
        >
            <div className="glass-card rounded-[3.5rem] p-10 lg:p-16 border border-white/20">
              <h2 className="text-3xl font-black mb-12 text-slate-900 dark:text-white tracking-tight">Dispatch a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="e.g. Alexander Pierce"
                      className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600"
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                      <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="alexander@visionary.com"
                        className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600"
                        required
                      />
                  </div>
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Subject / Phone Number</label>
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="How can we expedite your journey?"
                      className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600"
                      required
                    />
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Brief Your Ambition</label>
                  <textarea
                    name="message"
                    placeholder="Describe your goals in detail..."
                    className="w-full px-8 py-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none h-48 font-medium placeholder:text-slate-300 dark:placeholder:text-slate-600"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:w-max px-16 py-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black rounded-2xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-4"
                >
                  {isSubmitting ? "Dispatching..." : "Send Dispatch"}
                  <MdEmail className={`${isSubmitting ? 'animate-bounce' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform duration-300`} />
                </button>
              </form>
            </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
