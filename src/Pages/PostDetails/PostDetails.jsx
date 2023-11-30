import { useParams } from "react-router-dom";
import { FaShareAlt, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useState, useEffect } from "react";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

// Fetching the post details by ID from the correct backend route
useEffect(() => {
    fetch(`https://discuss-dive-server.vercel.app/addPost/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching post details:', error));
}, [id]);


    

    return (
        <div>
            {post ? (
                <div>
                    <div className="flex gap-4 items-center">
                    <img className="h-24 w-24" src={post.authorImage} alt="Author" />
                    <h2 className="item-center text-2xl">Author Name:{post.authorName}</h2>
                    </div>
                    <h3 className="text-xl">Post Title:{post.postTitle}</h3>
                    <p> Post Descrccption:{post.postDescription}</p>
                    <p>Post Time: {post.postTime}</p>

                    {/* React-icons for share, upvote, downvote */}
                    <div className="flex items-center justify-center gap-6">
                    <FaThumbsUp className="h-6 w-6" onClick={() => alert(`Upvote post: ${id}`)} />
                    <FaThumbsDown className="h-6 w-6" onClick={() => alert(`Downvote post: ${id}`)} />
                    <FaShareAlt className="h-6 w-6" onClick={() => alert(`Share post: ${id}`)} />
                    </div>

                    {/* Comment Section Component */}
                    {/* <CommentSection postId={id} /> */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PostDetails;


