import  { useEffect, useState } from "react";
import PostsCard from "./PostsCard";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://discuss-dive-server.vercel.app/addPost')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className="text-center m-8 text-3xl text-bold underline">Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    posts.map(post => (
                        <PostsCard key={post._id} post={post}></PostsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;
