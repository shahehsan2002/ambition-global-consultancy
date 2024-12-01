
// import bannerImg from '../../../assets/Image/sasha-freemind-cm0eSVxdLDg-unsplash.jpg';

// const Banner2 = () => {
//   return (
//     <div
//       className="hero min-h-screen bg-cover bg-center relative transition-all duration-700 ease-in-out"
//       style={{ backgroundImage: `url(${bannerImg})` }}
//     >
//       <div className="hero-overlay bg-opacity-60 absolute inset-0 transition-all duration-500 ease-in-out"></div>
//       <div className="hero-content text-center text-neutral-content relative z-10">
//         <div className="max-w-md mx-auto">
//           <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight transform transition-transform duration-500 hover:scale-105">
//             Explore the World with Ambition Global Consultancy
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl text-white mt-4 md:mt-6 transform transition-all duration-300 hover:text-orange-400">
//             Discover breathtaking destinations and create unforgettable memories.
//           </p>
//           {/* Uncomment and modify if you want a button */}
//           {/* <p className="btn btn-outline m-4 shadow-lg hover:bg-orange-400 transition-all duration-300">Get Started</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner2;

import bannerImg from '../../../assets/Image/sasha-freemind-cm0eSVxdLDg-unsplash.jpg';

const Banner2 = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center relative transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero-overlay bg-opacity-60 absolute inset-0 transition-all duration-500 ease-in-out"></div>
      <div className="hero-content text-center text-neutral-content relative z-10">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight transform opacity-0 animate-fancy-text transition-all duration-1000 ease-in-out">
            Explore the World with Ambition Global Consultancy
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-4 md:mt-6 opacity-0 animate-fancy-text-2 transition-all duration-1200 ease-in-out">
            Discover breathtaking destinations and create unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
