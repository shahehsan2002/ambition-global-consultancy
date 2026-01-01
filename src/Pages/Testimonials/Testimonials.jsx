import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <section className="py-20 bg-primary/5 dark:bg-slate-900/50 overflow-hidden relative">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/patterns/grid.svg')] opacity-5"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif text-slate-800 dark:text-white">
                        Client <span className="text-primary">Success Stories</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear what our satisfied clients have to say about their journey with Ambition Global.
                    </p>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {reviews.map(review => (
                        <SwiperSlide key={review._id} className="max-w-md">
                            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700 h-full flex flex-col relative mx-4 my-8">
                                <div className="absolute -top-6 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-lg">
                                    <FaQuoteLeft />
                                </div>
                                <div className="flex-grow">
                                    <Rating style={{ maxWidth: 120 }} value={review.rating} readOnly className="mb-6" />
                                    <p className="text-slate-600 dark:text-slate-300 italic mb-6 leading-relaxed">
                                        "{review.details}"
                                    </p>
                                </div>
                                <div className="mt-auto border-t border-slate-100 dark:border-slate-700 pt-6">
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{review.name}</h3>
                                    <p className="text-sm text-primary font-medium uppercase tracking-wider">Satisfied Client</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
