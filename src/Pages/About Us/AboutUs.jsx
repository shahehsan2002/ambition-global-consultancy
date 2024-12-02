
// import { Helmet } from "react-helmet-async";
// // import img from "../../assets/home/travel1.jpg";
// import AboutImg from "../../assets/Image/About.jpg"
// import AboutImg1 from "../../assets/Image/About!.jpg"

// const AboutUs = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Ambition | About</title>
//       </Helmet>

//       {/* Mission section */}
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row ">
//           <img src={AboutImg} className="max-w-sm rounded-lg shadow-2xl" alt="Mission" />
//           <div className="w-1/2">
//             <h1 className="sm:text-2xl md:text-4xl font-bold">Our Mission</h1>
//             <p className="mb-6">
//               Our mission is to cater exclusively to corporate needs, offering tailored services for executive trips, seminars, and conferences. We aim for convenience, cost-effectiveness, and comfort.
//             </p>
//             <p>
//               We ensure businesses focus on their core activities while we manage travel logistics, empowering them for sustained growth and success.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Vision section */}
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img src={AboutImg1} className="max-w-sm rounded-lg shadow-2xl" alt="Vision" />
//           <div className="w-1/2 items-center">
//             <h1 className="sm:text-2xl md:text-4xl font-bold">Our Vision</h1>
//             <p className="mb-6">
//               Our vision is to empower students with expert guidance, ensuring informed decisions about academic pursuits abroad. We aim for seamless transitions and rewarding educational experiences.
//             </p>
//             <p>
//               Through personalized consultations and cultural insights, we equip students with resources for a successful academic journey.
//             </p>
//           </div>
//         </div>
//       </div>

      

      
//     </div>
//   );
// };

// export default AboutUs;



// import { Helmet } from "react-helmet-async";
// import { FaPlane, FaGraduationCap } from "react-icons/fa"; // Replace images with relevant icons

// const AboutUs = () => {
//   return (
//     <div>
//       <Helmet>
//         <title>Ambition | About</title>
//       </Helmet>

//       {/* Mission section */}
//       <section className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-6">
//         <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
//           {/* Icon */}
//           <div className="flex-1 text-center lg:text-left animate__animated animate__fadeInLeft">
//             <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
//               Our Mission
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Our mission is to cater exclusively to corporate needs, offering tailored services for executive trips, seminars, and conferences. We aim for convenience, cost-effectiveness, and comfort.
//             </p>
//             <p className="text-lg text-gray-700">
//               We ensure businesses focus on their core activities while we manage travel logistics, empowering them for sustained growth and success.
//             </p>
//           </div>
//           {/* SVG Icon */}
//           <div className="flex-1 flex justify-center animate__animated animate__fadeInRight">
//             <FaPlane className="text-blue-600 w-40 h-40" />
//           </div>
//         </div>
//       </section>

//       {/* Vision section */}
//       <section className="min-h-screen bg-gradient-to-r from-white via-blue-50 to-white py-12 px-6">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
//           {/* Icon */}
//           <div className="flex-1 flex justify-center animate__animated animate__fadeInLeft">
//             <FaGraduationCap className="text-blue-600 w-40 h-40" />
//           </div>
//           <div className="flex-1 text-center lg:text-left animate__animated animate__fadeInRight">
//             <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
//               Our Vision
//             </h1>
//             <p className="text-lg text-gray-700 mb-4">
//               Our vision is to empower students with expert guidance, ensuring informed decisions about academic pursuits abroad. We aim for seamless transitions and rewarding educational experiences.
//             </p>
//             <p className="text-lg text-gray-700">
//               Through personalized consultations and cultural insights, we equip students with resources for a successful academic journey.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;


import { Helmet } from "react-helmet-async";
import { FaSuitcase, FaUniversity } from "react-icons/fa"; // Replacing with thematic icons for Mission and Vision
import "animate.css"; // Ensure this library is installed: npm install animate.css

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Ambition | About</title>
      </Helmet>

      {/* Mission section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInLeft">
            <FaSuitcase className="text-6xl text-blue-500 mx-auto lg:mx-0 mb-6" />
            <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center lg:text-left">
              Our Mission
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to cater exclusively to corporate needs, offering tailored services for executive trips, seminars, and conferences.
            </p>
            <p className="text-lg text-gray-700">
              We aim for convenience, cost-effectiveness, and comfort while ensuring businesses focus on their core activities.
            </p>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInRight">
            <div className="relative group">
              <FaSuitcase className="absolute text-gray-300 text-8xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
              <FaSuitcase className="text-blue-500 text-8xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Vision section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center gap-12">
          <div className="w-1/2 animate__animated animate__fadeInRight">
            <FaUniversity className="text-6xl text-green-500 mx-auto lg:mx-0 mb-6" />
            <h1 className="text-4xl font-bold text-green-600 mb-4 text-center lg:text-left">
              Our Vision
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Our vision is to empower students with expert guidance, ensuring informed decisions about academic pursuits abroad.
            </p>
            <p className="text-lg text-gray-700">
              We aim for seamless transitions and rewarding educational experiences through personalized consultations and resources.
            </p>
          </div>
          <div className="w-1/2 animate__animated animate__fadeInLeft">
            <div className="relative group">
              <FaUniversity className="absolute text-gray-300 text-8xl top-6 left-6 blur-md group-hover:blur-none transition-all duration-300" />
              <FaUniversity className="text-green-500 text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
