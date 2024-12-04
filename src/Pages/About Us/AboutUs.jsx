

// import { Helmet } from "react-helmet-async";
// import { FaSuitcase, FaUniversity } from "react-icons/fa"; // Replacing with thematic icons for Mission and Vision
// import "animate.css"; // Ensure this library is installed: npm install animate.css

// const AboutUs = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Ambition | About</title>
//       </Helmet>

//       {/* Mission section */}
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row items-center gap-12">
//           <div className="w-1/2 animate__animated animate__fadeInLeft">
//             <FaSuitcase className="text-6xl text-blue-500 mx-auto lg:mx-0 mb-6" />
//             <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center lg:text-left">
//               Our Mission
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Our mission is to cater exclusively to corporate needs, offering tailored services for executive trips, seminars, and conferences.
//             </p>
//             <p className="text-lg text-gray-700">
//               We aim for convenience, cost-effectiveness, and comfort while ensuring businesses focus on their core activities.
//             </p>
//           </div>
//           <div className="w-1/2 animate__animated animate__fadeInRight">
//             <div className="relative group">
//               <FaSuitcase className="absolute text-gray-300 text-8xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
//               <FaSuitcase className="text-blue-500 text-8xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Vision section */}
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
//           <div className="w-1/2 animate__animated animate__fadeInRight">
//             <FaUniversity className="text-6xl text-green-500 mx-auto lg:mx-0 mb-6" />
//             <h1 className="text-4xl font-bold text-green-600 mb-4 text-center lg:text-left">
//               Our Vision
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Our vision is to empower students with expert guidance, ensuring informed decisions about academic pursuits abroad.
//             </p>
//             <p className="text-lg text-gray-700">
//               We aim for seamless transitions and rewarding educational experiences through personalized consultations and resources.
//             </p>
//           </div>
//           <div className="w-1/2 animate__animated animate__fadeInLeft">
//             <div className="relative group">
//               <FaUniversity className="absolute text-gray-300 text-8xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
//               <FaUniversity className="text-green-500 text-8xl" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import { Helmet } from "react-helmet-async";
import { FaSuitcase, FaUniversity, FaGlobe, FaHandshake } from "react-icons/fa";
import "animate.css"; // Ensure you have this library installed for animations

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Ambition | About</title>
      </Helmet>

      {/* Mission Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInLeft">
            <FaSuitcase className="text-6xl text-blue-500 mx-auto lg:mx-0 mb-6 hover:text-blue-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center lg:text-left">
              Our Mission
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to redefine corporate travel, providing tailored solutions for executive trips, seminars, and conferences that combine convenience, comfort, and affordability.
            </p>
            <p className="text-lg text-gray-700">
              We aim to allow organizations to focus on growth and innovation while we seamlessly manage their travel needs with precision and professionalism.
            </p>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInRight">
            <div className="relative group">
              <FaSuitcase className="absolute text-gray-300 text-9xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
              <FaSuitcase className="text-blue-500 text-9xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInRight">
            <FaUniversity className="text-6xl text-green-500 mx-auto lg:mx-0 mb-6 hover:text-green-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold text-green-600 mb-4 text-center lg:text-left">
              Our Vision
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Our vision is to be a trusted partner for students and professionals, offering unparalleled guidance in pursuing global opportunities.
            </p>
            <p className="text-lg text-gray-700">
              We aspire to empower individuals with personalized consultations, cultural insights, and seamless support, ensuring they excel on their journey.
            </p>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInLeft">
            <div className="relative group">
              <FaUniversity className="absolute text-gray-300 text-9xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
              <FaUniversity className="text-green-500 text-9xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInUp">
            <FaGlobe className="text-6xl text-purple-500 mx-auto lg:mx-0 mb-6 hover:text-purple-600 transition-colors duration-300" />
            <h1 className="text-4xl font-bold text-purple-600 mb-4 text-center lg:text-left">
              Our Core Values
            </h1>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Integrity:</strong> We maintain honesty and transparency in all our endeavors.
              </li>
              <li>
                <strong>Innovation:</strong> We continuously strive to bring creative solutions to our clients.
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in building strong relationships with partners and clients.
              </li>
            </ul>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInUp">
            <div className="relative group">
              <FaHandshake className="absolute text-gray-300 text-9xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
              <FaHandshake className="text-purple-500 text-9xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInRight">
            <h1 className="text-4xl font-bold text-red-600 mb-4 text-center lg:text-left">
              Join Us on Our Journey
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Whether you're a student seeking guidance, a business in need of expert travel solutions, or a partner ready to collaborate, we welcome you to be part of our story.
            </p>
            <button className="btn btn-primary animate__animated animate__pulse animate__infinite">
              Learn More
            </button>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInLeft">
            <img
              src="https://via.placeholder.com/500"
              alt="Journey"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
