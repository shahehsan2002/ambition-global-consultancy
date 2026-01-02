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
    <div className="max-w-7xl mx-auto px-6">
      
      {/* Narrative Header */}
      <div className="mb-24">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight leading-[1.1] text-retina">
                  Beyond Boundaries. <br />
                  <span className="premium-gradient-text">Inside Our Mission.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
                  We are architects of global ambition. Whether it's securing a seat at a world-renowned university or orchestrating complex international corporate mobility, we provide the strategic precision to catalyze your success.
              </p>
          </motion.div>
      </div>

      {/* Story Composition */}
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center mb-40">
          <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative"
          >
              <div className="absolute -inset-6 bg-primary/5 blur-[100px] rounded-[3rem] -z-10" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl group">
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" 
                    alt="Our Collective Vision" 
                    className="w-full h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
          >
              <h3 className="text-4xl md:text-5xl font-extrabold mb-10 text-slate-900 dark:text-white tracking-tight">Our Evolution.</h3>
              <div className="space-y-8 text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  <p>
                      Ambition Global was founded on a singular premise: that global opportunities should be accessible through technical excellence and unwavering integrity.
                  </p>
                  <p>
                      Today, we are a global beacon for elite education and corporate consultancy, recognized for our sophisticated handling of international regulations and bespoke logistics.
                  </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
                  {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 text-slate-900 dark:text-white font-extrabold text-lg">
                          <div className="w-8 h-8 rounded-[0.75rem] bg-slate-900 dark:bg-white flex items-center justify-center text-white dark:text-slate-900 shadow-xl">
                              <FaCheckCircle className="text-sm" />
                          </div>
                          {feature}
                      </div>
                  ))}
              </div>
          </motion.div>
      </div>

      {/* Strategic Vision Cards */}
      <div className="grid md:grid-cols-2 gap-12 mb-40">
          <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
               className="glass-card p-16 rounded-[3rem] border border-slate-100 dark:border-white/10"
          >
              <h3 className="text-3xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">Strategic Mission</h3>
              <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  To institutionalize global excellence by providing precision-engineered guidance, enabling our partners to navigate international complexity with absolute confidence.
              </p>
          </motion.div>

           <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2, cubicBezier: [0.16, 1, 0.3, 1] }}
               className="p-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[3rem] shadow-2xl ring-1 ring-white/10"
          >
              <h3 className="text-3xl font-black mb-8 tracking-tight">Global Vision</h3>
              <p className="text-xl text-slate-300 dark:text-slate-600 leading-relaxed font-medium">
                  To architect the future of global mobility through transparency, innovation, and an uncompromising commitment to the success of every global citizen we serve.
              </p>
          </motion.div>
      </div>

      {/* Leadership Integration */}
      <div className="pt-24 border-t border-slate-100 dark:border-white/10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-24 text-slate-900 dark:text-white text-center tracking-tight text-retina">Meet the Leadership.</h3>
          <TeamGrid />
      </div>
    </div>
  );
};

export default AboutUs;
