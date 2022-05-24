import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          className=""
          src="../assets/ghTour.png"
          alt=""
          height="300px"
          width="300px"
        />
        <p>
          {" "}
          This is a secret blog that you have found. This blog holds the key to
          all the meta-universes in the world. if you would like to continue
          exploring this awesome world just keep pushing forward and you will
          find yorself moving at a fast rate when you start vibrating at a
          certain frequency your life will start to accelarte and will
          gravaitate you towards your Thoughts and ideas that are concienved in
          the human mind.{" "}
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinerma</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          <i className="sidebarIcon fab fa-reddit-square"></i>
          <i className="sidebarIcon fab fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
}
