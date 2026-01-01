import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import bannerImg from '../../../assets/Image/sasha-freemind-cm0eSVxdLDg-unsplash.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bannerImg}
            bgImageAlt="the world"
            strength={-200}
            className="h-screen relative flex items-center justify-center"
        >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay using Tailwind */}
            
            <div className="hero-content text-center text-neutral-content relative z-10 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight font-serif"
                    >
                        Explore the World with 
                        <span className="block text-primary mt-2">Ambition Global</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl lg:text-2xl text-slate-200 mt-6 max-w-2xl mx-auto font-light"
                    >
                        Discover breathtaking destinations and create unforgettable memories with our premium consultancy services.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 flex gap-4 justify-center"
                    >
                        <Link to="/contact">
                            <button className="btn btn-primary btn-lg rounded-full px-8 text-white border-none bg-primary hover:bg-indigo-600 shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                                Get Started
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="btn btn-outline btn-lg rounded-full px-8 text-white hover:bg-white/10 hover:text-white border-white transition-all duration-300">
                                Learn More
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </Parallax>
    );
};

export default Banner;
