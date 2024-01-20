import  { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // fetch('https://discuss-dive-server.vercel.app/addPost')
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="" >
            <h2 className="text-center m-10 text-3xl text-bold underline">Our Services</h2>
            <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    posts.map(post => (
                        <ServiceCard key={post._id} post={post}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
