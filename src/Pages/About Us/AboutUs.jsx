import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import TeamGrid from "../../Components/Team/TeamGrid";

const AboutUs = () => {
  const features = [
    "Expert Consultants",
    "Global Network",
    "Personalized Approach",
    "Verified Success"
  ];

  return (
    <div className="bg-light dark:bg-dark min-h-screen pt-24 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6 font-serif text-slate-800 dark:text-white">
            About <span className="text-primary">Ambition Global</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to turning your dreams into reality. Whether it's studying at a top university abroad or expanding your business globally, we provide the expertise to get you there.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                    alt="Our Team" 
                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Journey</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>
                        Established with a vision to bridge the gap between aspiration and achievement, Ambition Global Consultancy has grown into a trusted name in education and corporate consultancy.
                    </p>
                    <p>
                        Our team of seasoned professionals understands the nuances of international applications, visa regulations, and corporate travel logistics. 
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-800 dark:text-white font-medium">
                            <FaCheckCircle className="text-primary" />
                            {feature}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Team Section */}
        <TeamGrid />

        {/* Mission/Vision */}
        <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700/50"
            >
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To empower individuals and businesses with the right guidance, enabling them to explore global opportunities with confidence and ease.
                </p>
            </motion.div>

             <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="p-10 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700/50"
            >
                <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    To be the most preferred and trusted global consultancy partner, known for transparency, excellence, and unwavering commitment to client success.
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
