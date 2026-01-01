import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
            title: "Explore the World ",
            highlight: "With Us",
            desc: "Discover breathtaking destinations and create unforgettable memories with our premium travel consultancy.",
            cta: "Plan Your Trip",
            link: "/contact"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
            title: "Unlock Global ",
            highlight: "Education",
            desc: "Your gateway to prestigious universities worldwide. We guide you from application to admission.",
            cta: "Start Your Journey",
            link: "/contact"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            title: "Corporate ",
            highlight: "Excellence",
            desc: "Seamless travel solutions for businesses. Efficiency, comfort, and reliability for your team.",
            cta: "Partner With Us",
            link: "/supply"
        }
    ];

    return (
        <div className="relative h-screen w-full">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect={'fade'}
                speed={1500}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"></span>';
                    },
                }}
                navigation={false}
                className="h-full w-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full overflow-hidden">
                                {/* Background Image with Slow Zoom */}
                                <div 
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-110' : 'scale-100'}`}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    {/* Professional Dark Overlay - Gradient for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                </div>

                                {/* Content Container - Left Aligned for Standard Look */}
                                <div className="relative h-full container mx-auto px-6 md:px-12 flex items-center">
                                    <div className="max-w-3xl w-full">
                                        <motion.div
                                            key={`text-${slide.id}-${isActive}`}
                                            initial={{ opacity: 0, x: -30 }}
                                            animate={isActive ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                            className="text-left"
                                        >
                                            {/* Top Tagline */}
                                            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/80 text-sm font-semibold tracking-widest uppercase mb-4 backdrop-blur-md bg-white/5">
                                                Ambition Global Consultancy
                                            </span>

                                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
                                                {slide.title}
                                                <span className="text-primary block">{slide.highlight}</span>
                                            </h1>
                                            
                                            <div className="h-1 w-20 bg-primary mb-8"></div>

                                            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl font-light leading-relaxed opacity-90">
                                                {slide.desc}
                                            </p>
                                            
                                            <div className="flex flex-col sm:flex-row gap-5">
                                                <Link to={slide.link}>
                                                    <button className="btn btn-primary btn-lg rounded-none px-8 text-white border-2 border-primary hover:bg-transparent hover:border-white transition-all duration-300 uppercase tracking-wider text-sm font-bold">
                                                        {slide.cta}
                                                    </button>
                                                </Link>
                                                <Link to="/about">
                                                    <button className="btn btn-outline btn-lg rounded-none px-8 text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-bold">
                                                        Learn More
                                                    </button>
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination Style Override */}
            <style jsx>{`
                .swiper-pagination-bullet {
                    width: 40px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                    border-radius: 0;
                    margin: 0 4px !important;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: #ffffff !important;
                    width: 60px;
                }
            `}</style>
        </div>
    );
};

export default HeroSlider;
