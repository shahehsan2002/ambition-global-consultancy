
// import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import the required icons from react-icons/fa

// const Footer = () => {
//   return (
//     <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
//       <nav>
//         <div className="grid grid-flow-col gap-4">
//           <a href="https://www.facebook.com/ambitionglobalconsultancy?mibextid=ZbWKwL"><FaFacebook size={24} /></a>
//           <a href="https://instagram.com/ambition_global_consultancy?igshid=OGQ5ZDc2ODk2ZA"><FaInstagram size={24} /></a>
//           <a href="https://wa.me/message/EN3QXKHPZJW7B1"><FaWhatsapp size={24} /></a>
//         </div>
//       </nav>
//       <aside>
//         <p className="text-xs sm:text-sm md:text-base lg:text-lg">
//           &copy; 2023 Ambition Global Consultancy. All Rights Reserved.
//         </p>
//       </aside>
//     </footer>
//   );
// };

// export default Footer;

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Import the required icons from react-icons/fa

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white">
      <nav>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.facebook.com/ambitionglobalconsultancy?mibextid=ZbWKwL"
            className="text-xl hover:text-blue-500 transform transition-all duration-300 hover:scale-125"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/ambition_global_consultancy?igshid=OGQ5ZDc2ODk2ZA"
            className="text-xl hover:text-pink-500 transform transition-all duration-300 hover:rotate-12"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/message/EN3QXKHPZJW7B1"
            className="text-xl hover:text-green-500 transform transition-all duration-300 hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          &copy; {new Date().getFullYear()} Ambition Global Consultancy. All Rights Reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
