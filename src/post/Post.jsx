import "./post.css";
export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="./assets/squidGameBanner.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle"> Hello this is something cool working</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        This is some very intersted description about hte post that will filled
        dynamicall one compoponent at a time.This is some very intersted
        description about hte post that will filled dynamicall one compoponent
        at a time.This is some very intersted description about hte post that
        will filled dynamicall one compoponent at a time.This is some very
        intersted description about hte post that will filled dynamicall one
        compoponent at a time.{" "}
      </p>
    </div>
  );
}
