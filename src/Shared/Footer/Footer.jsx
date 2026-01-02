import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo1.png";

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/ambitionglobalconsultancy?mibextid=ZbWKwL", color: "hover:text-blue-600", label: "Facebook" },
    { icon: <FaInstagram />, link: "https://instagram.com/ambition_global_consultancy?igshid=OGQ5ZDc2ODk2ZA", color: "hover:text-pink-600", label: "Instagram" },
    { icon: <FaWhatsapp />, link: "https://wa.me/message/EN3QXKHPZJW7B1", color: "hover:text-green-500", label: "WhatsApp" },
    { icon: <FaLinkedin />, link: "#", color: "hover:text-blue-700", label: "LinkedIn" },
    { icon: <FaTwitter />, link: "#", color: "hover:text-sky-500", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "Home", path: "/#home" },
    { name: "About Us", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/#contact" },
  ];

  const services = [
    "Student Consultancy",
    "Visa Processing",
    "Air Ticketing",
    "Work Permits"
  ];

  return (
    <footer className="relative bg-slate-50 dark:bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-slate-100 dark:border-white/5" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                {/* Brand Section */}
                <div className="space-y-8">
                    <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform" aria-label="Ambition Global Home">
                        <img src={logo} alt="Ambition Global Consultancy Logo" className="h-14 w-auto drop-shadow-md" />
                        <span className="font-bold text-2xl font-serif text-slate-900 dark:text-white tracking-tight">
                            Ambition Global
                        </span>
                    </Link>
                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        Building your future with precision, innovation, and global expertise. Your trusted partner in international opportunities.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a 
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Follow us on ${social.label}`}
                                className={`p-3.5 rounded-2xl bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${social.color} border border-slate-100 dark:border-white/5`}
                            >
                                <span className="text-xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="lg:pl-8">
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-8 tracking-tight">Navigation</h3>
                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="text-lg text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-3 group font-medium">
                                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary group-hover:scale-125 transition-all"></span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                 {/* Services */}
                 <div>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-8 tracking-tight">Our Focus</h3>
                    <ul className="space-y-4">
                        {services.map((service) => (
                            <li key={service} className="text-lg text-slate-500 dark:text-slate-400 cursor-default flex items-center gap-3 font-medium">
                                 <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                 {service}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter/Contact */}
                <div className="lg:col-span-1">
                    <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden group border-slate-200/50 dark:border-white/10 h-full flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                        <div>
                            <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-6 relative z-10 tracking-tight">Need help?</h3>
                            <div className="space-y-4 mb-10 relative z-10 text-slate-500 dark:text-slate-400 font-medium text-lg">
                                <p>Sylhet-3100, Bangladesh</p>
                                <p className="text-2xl font-bold text-primary dark:text-blue-400">+880 1718-148790</p>
                            </div>
                        </div>
                        <Link to="/contact" className="inline-flex items-center justify-center w-full px-8 py-4 bg-primary text-white dark:bg-blue-600 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all relative z-10 text-lg">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-100 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 dark:text-slate-500 text-base font-medium">
                     &copy; {new Date().getFullYear()} <span className="text-slate-900 dark:text-white font-bold">Ambition Global</span>. All Rights Reserved.
                </p>
                <div className="flex gap-8 text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
