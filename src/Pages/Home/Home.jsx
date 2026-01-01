import { Helmet } from "react-helmet-async";
import HeroSlider from "./Banner/HeroSlider";
import Testimonials from "../Testimonials/Testimonials";
import Services from "./Services/Services";
import Consultancy from "./Consultancy/Consultancy";
import Supply from "./Supply/Supply";
import Stats from "../../Components/Stats/Stats";
import ProcessTimeline from "../../Components/ProcessTimeline/ProcessTimeline";
import SuccessGallery from "../../Components/SuccessGallery/SuccessGallery";

const Home = () => {
  return (
    <div className="bg-light dark:bg-dark min-h-screen">
      <Helmet>
        <title>Ambition | Home</title>
      </Helmet>
      <HeroSlider />
      <Stats />
      <Services />
      <ProcessTimeline />
      <Consultancy />
      <Supply />
      <SuccessGallery />
      <Testimonials />
    </div>
  );
};

export default Home;
