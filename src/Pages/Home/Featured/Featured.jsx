import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 20, 2024</p>
                    <p className="uppercase">where i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor totam tenetur cum error corrupti repudiandae eveniet. Quia, nisi dolorem quod eum deleniti, vel numquam illo sapiente atque pariatur reiciendis ducimus eveniet veniam hic explicabo! Excepturi, nesciunt? Nostrum, modi harum!</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;