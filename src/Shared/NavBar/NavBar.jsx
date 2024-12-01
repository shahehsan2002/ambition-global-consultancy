
// import { Link } from "react-router-dom";
// import logo from "../../assets/icon/logo1.png";

// const navOptions = (
//   <>
//     <li>
//       <Link
//         to="/"
//         className="relative group transition-all duration-300 text-gray-300 hover:text-white"
//       >
//         Home
//         <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/about"
//         className="relative group transition-all duration-300 text-gray-300 hover:text-white"
//       >
//         About Us
//         <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="/contact"
//         className="relative group transition-all duration-300 text-gray-300 hover:text-white"
//       >
//         Contact
//         <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
//       </Link>
//     </li>
//   </>
// );

// const NavBar = () => {
//   return (
//     <div className="navbar fixed z-50 backdrop-blur-md bg-opacity-80 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg py-3 transition-all duration-500 ease-in-out">
//       {/* Navbar for Larger Devices */}
//       <div className="navbar-start hidden lg:flex items-center">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="h-12 w-auto transition-transform duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
//         />
//         <h1 className="font-bold text-xl text-orange-400 tracking-wide ml-2">
//           Ambition Global
//         </h1>
//       </div>

//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-4 space-x-8 text-lg font-medium">
//           {navOptions}
//         </ul>
//       </div>

//       <div className="navbar-end hidden lg:block"></div>

//       {/* Navbar for Smaller Devices */}
//       <div className="navbar lg:hidden w-full flex justify-between items-center px-4">
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Logo"
//           className="h-10 w-auto transition-transform duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,165,0,0.8)]"
//         />

//         {/* Dropdown Menu */}
//         <div className="dropdown">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost flex items-center justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8 animate-bounce"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-gray-800 rounded-lg w-52 text-white animate-fade-in backdrop-blur-sm"
//           >
//             {navOptions}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo1.png";

const navOptions = (
  <>
    <li>
      <Link
        to="/"
        className="relative group transition-all duration-300 text-gray-300 hover:text-white"
      >
        Home
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="relative group transition-all duration-300 text-gray-300 hover:text-white"
      >
        About Us
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="relative group transition-all duration-300 text-gray-300 hover:text-white"
      >
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-1 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar fixed z-50 backdrop-blur-2xl bg-opacity-40 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-lg py-3 transition-all duration-500 ease-in-out">
      {/* Navbar for Larger Devices */}
      <div className="navbar-start hidden lg:flex items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto transition-transform duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]"
        />
        <h1 className="font-bold text-xl text-orange-400 tracking-wide ml-2 drop-shadow-lg">
          Ambition Global
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-8 text-lg font-medium">
          {navOptions}
        </ul>
      </div>

      <div className="navbar-end hidden lg:block"></div>

      {/* Navbar for Smaller Devices */}
      <div className="navbar lg:hidden w-full flex justify-between items-center px-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto transition-transform duration-500 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]"
        />

        {/* Dropdown Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-gray-800 rounded-lg w-52 text-white animate-fade-in backdrop-blur-lg"
          >
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
