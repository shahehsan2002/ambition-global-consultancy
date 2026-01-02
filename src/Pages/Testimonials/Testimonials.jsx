import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-white dark:bg-black overflow-hidden relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight leading-[1.1] text-retina">
                            Proven trust. <br />
                            <span className="premium-gradient-text">From global citizens.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            Join the community of hundreds of ambitious students and professionals who achieved their international goals with us.
                        </p>
                    </motion.div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    grabCursor={true}
                    spaceBetween={40}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-24 testimonials-swiper"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review._id}>
                            <div className="glass-card group h-full flex flex-col p-12 rounded-[3rem] relative overflow-hidden">
                                <FaQuoteLeft className="text-5xl text-slate-100 dark:text-white/5 absolute top-10 right-10 group-hover:scale-110 transition-transform duration-700" />
                                
                                <div className="mb-10">
                                    <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly className="ring-blue-500/20" />
                                </div>
                                
                                <p className="text-xl text-slate-600 dark:text-slate-300 italic mb-12 leading-relaxed font-medium flex-grow text-retina">
                                    "{review.details}"
                                </p>
                                
                                <div className="mt-auto flex items-center gap-5">
                                     <div className="w-16 h-16 rounded-[1.25rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-xl shadow-2xl">
                                         {review.name.charAt(0)}
                                     </div>
                                     <div className="space-y-1">
                                        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">{review.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                            <p className="text-xs text-blue-600 dark:text-blue-400 font-black uppercase tracking-widest">Verified Alumnus</p>
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx>{`
                    .testimonials-swiper .swiper-pagination-bullet {
                        width: 10px;
                        height: 10px;
                        background: #cbd5e1;
                        opacity: 0.5;
                        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .dark .testimonials-swiper .swiper-pagination-bullet {
                        background: #334155;
                    }
                    .testimonials-swiper .swiper-pagination-bullet-active {
                        width: 48px;
                        border-radius: 12px;
                        background: #6366f1 !important;
                        opacity: 1;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Testimonials;
