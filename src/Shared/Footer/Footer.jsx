import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-300 transition-colors duration-300">
      <nav>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com/ambitionglobalconsultancy?mibextid=ZbWKwL"
            className="text-2xl text-blue-600 dark:text-blue-400 hover:scale-125 transition-transform duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/ambition_global_consultancy?igshid=OGQ5ZDc2ODk2ZA"
            className="text-2xl text-pink-600 dark:text-pink-400 hover:rotate-12 transition-transform duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/message/EN3QXKHPZJW7B1"
            className="text-2xl text-green-600 dark:text-green-400 hover:scale-125 transition-transform duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
      <aside>
        <p className="font-medium">
          &copy; {new Date().getFullYear()} <span className="text-primary font-bold">Ambition Global Consultancy</span>. All Rights Reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
