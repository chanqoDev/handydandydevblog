import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrap">
        <img
          className="singlePostImg"
          src="./assets/moon.png"
          alt="TWiligth Moonlight Bright"
        ></img>
        <h1 className="singlePostTitle">
          This is The tiel of the single Post who knew nothing thatn to be a
          single post for something..
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i class="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Chris </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          {" "}
          one day I was a small post and I wanted to say a few wise words of
          wisdom and then that is how I repeat this sentence over and over agian
          like the same thing over and over agian.. becuaseits playing agian in
          my head over and over agian. Look at me go.. wow i am having a blast
          creating thing lorem impus by jsut typing and not caring ab othe
          mistaktse becasue this is jsut supoopsaob aly js tu loremi inmpus and
          it Greek amde up words anayway s one day I was a small post and I
          wanted to say a few wise words of wisdom and then that is how I repeat
          this sentence over and over agian like the same thing over and over
          agian.. becuaseits playing agian in my head over and over agian. Look
          at me go.. wow i am having a blast creating thing lorem impus by jsut
          typing and not caring ab othe mistaktse becasue this is jsut
          supoopsaob aly js tu loremi inmpus and it Greek amde up words anayway
          s one day I was a small post and I wanted to say a few wise words of
          wisdom and then that is how I repeat this sentence over and over agian
          like the same thing over and over agian.. becuaseits playing agian in
          my head over and over agian. Look at me go.. wow i am having a blast
          creating thing lorem impus by jsut typing and not caring ab othe
          mistaktse becasue this is jsut supoopsaob aly js tu loremi inmpus and
          it Greek amde up words anayway s{" "}
        </p>
      </div>
    </div>
  );
}
