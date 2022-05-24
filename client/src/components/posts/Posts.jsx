import "./posts.css";
import { Link } from "react-router-dom";
import Post from "../post/Post";

export default function Posts() {
  return (
    <div className="posts">
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
      <Link className="link" to="/post/:postId">
        <Post />
      </Link>
    </div>
  );
}
