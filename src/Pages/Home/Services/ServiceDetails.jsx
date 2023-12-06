

const ServiceDetails = ({post}) => {
    return (
        <div>
            <h2 className="card-title">{post.service_name}</h2>
                    <p>{post.short_description}</p>
        </div>
    );
};

export default ServiceDetails;