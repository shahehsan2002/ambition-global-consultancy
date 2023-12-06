
import { Helmet } from "react-helmet-async";
// import img from "../../assets/home/travel1.jpg";
import AboutImg from "../../assets/Image/About.jpg"
import AboutImg1 from "../../assets/Image/About!.jpg"

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Ambition | About</title>
      </Helmet>

      {/* Mission section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={AboutImg} className="max-w-sm rounded-lg shadow-2xl" alt="Mission" />
          <div className="w-1/2">
            <h1 className="sm:text-2xl md:text-4xl font-bold">Our Mission</h1>
            <p className="mb-6">
              Our mission is to cater exclusively to corporate needs, offering tailored services for executive trips, seminars, and conferences. We aim for convenience, cost-effectiveness, and comfort.
            </p>
            <p>
              We ensure businesses focus on their core activities while we manage travel logistics, empowering them for sustained growth and success.
            </p>
          </div>
        </div>
      </div>

      {/* Vision section */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={AboutImg1} className="max-w-sm rounded-lg shadow-2xl" alt="Vision" />
          <div className="w-1/2 items-center">
            <h1 className="sm:text-2xl md:text-4xl font-bold">Our Vision</h1>
            <p className="mb-6">
              Our vision is to empower students with expert guidance, ensuring informed decisions about academic pursuits abroad. We aim for seamless transitions and rewarding educational experiences.
            </p>
            <p>
              Through personalized consultations and cultural insights, we equip students with resources for a successful academic journey.
            </p>
          </div>
        </div>
      </div>

      

      
    </div>
  );
};

export default AboutUs;
