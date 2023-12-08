import bannerImg from '../../../assets/Image/sasha-freemind-cm0eSVxdLDg-unsplash.jpg';
const Banner2 = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight">Explore the World with Ambition Global Consultancy</h1>
                    <p className="text-base md:text-lg lg:text-xl text-white mt-4 md:mt-6">Discover breathtaking destinations and create unforgettable memories.</p>
                    {/* <p className="btn btn-outline m-4 shadow-lg">Get Started</p> */}
                </div>
            </div>
        </div>
    );
};

export default Banner2;
