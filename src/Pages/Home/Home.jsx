import { Helmet } from "react-helmet-async";
import StandardHero from "./Banner/StandardHero";
import ScrollReveal from "../../Components/Animations/ScrollReveal";
// import HeroSlider from "./Banner/HeroSlider"; // Keeping reference just in case
import Testimonials from "../Testimonials/Testimonials";
import Services from "./Services/Services";
import Consultancy from "./Consultancy/Consultancy";
import Supply from "./Supply/Supply";
import Stats from "../../Components/Stats/Stats";
import ProcessTimeline from "../../Components/ProcessTimeline/ProcessTimeline";

import AboutUs from "../About Us/AboutUs";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div id="home" className="bg-white dark:bg-[#020617] min-h-screen">
      <Helmet>
        <title>Ambition Global | World-Class Consultancy</title>
        <meta name="description" content="Expert student consultancy, visa processing, and corporate and supply solutions." />
      </Helmet>
      
      {/* Standard Hero Section */}
      <StandardHero />


      <section className="section-padding overflow-hidden">
        <Stats />
      </section>

      <section id="services" className="section-padding bg-slate-50/50 dark:bg-white/5">
        <Services />
      </section>

      <section className="section-padding">
        <ProcessTimeline />
      </section>

      <section className="section-padding bg-slate-50/50 dark:bg-white/5">
        <Consultancy />
      </section>

      <section className="section-padding">
        <Supply />
      </section>


      <section className="section-padding">
        <Testimonials />
      </section>


      <div id="about">
        <AboutUs />
      </div>

      <div id="contact">
         <Contact />
      </div>
    </div>
  );
};

export default Home;
