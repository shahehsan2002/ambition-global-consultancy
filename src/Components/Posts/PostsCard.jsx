
import { Link } from "react-router-dom";

const PostsCard = ({ post }) => {
    return (
        <Link to={`/post/${post?._id}`} className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Author Name: {post.authorName}</h2>
                <p>Post Title: {post.postTitle}</p>
                <p>Post Time: {post.postTime}</p>
                <p>Tag: {post.tag}</p>
                <div className="card-actions justify-end">
                    <p className="btn btn-primary">Total Vote: {post.upVote}</p>
                    <p className="btn btn-ghost">Total Comment: {post.comment}</p>
                </div>
            </div>
        </Link>
    );
};

export default PostsCard;
