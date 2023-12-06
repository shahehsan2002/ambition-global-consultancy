
// import { Link } from "react-router-dom";

const ServiceCard = ({ post }) => {
    return (
        // <Link to={`/post/${post?._id}`} className="card bg-neutral text-neutral-content">
        <div to={`/post/${post?._id}`} className="card bg-neutral text-neutral-content">
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src={post.img} alt="Services" /></figure>
                <div className="card-body">
                    <h2 className="card-title item-center text-center">{post.service_name}</h2>
                    {/* <p>{post.short_description}</p> */}
                    <p>{post.full_description}</p>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Learn More</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
