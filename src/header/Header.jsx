import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Nodes</span>
        <span className="headerTitleLg">blog</span>
      </div>
      <img className="headerImg" src="../assets/Browserify.png" alt="" />
    </div>
  );
}
