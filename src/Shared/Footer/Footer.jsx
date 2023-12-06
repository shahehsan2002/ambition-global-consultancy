
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import the required icons from react-icons/fa

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/ambitionglobalconsultancy?mibextid=ZbWKwL"><FaFacebook size={24} /></a>
          <a href="https://instagram.com/ambition_global_consultancy?igshid=OGQ5ZDc2ODk2ZA"><FaInstagram size={24} /></a>
          <a href="https://wa.me/message/EN3QXKHPZJW7B1"><FaWhatsapp size={24} /></a>
        </div>
      </nav>
      <aside>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          &copy; 2023 Ambition Global Consultancy. All Rights Reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
