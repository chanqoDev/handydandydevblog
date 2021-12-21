import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // Pseudo user
  const currentUser = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={currentUser ? <Home /> : <Login />} />
        </Route>
        <Route path="home" element={currentUser ? <Home /> : <Login />} />
        <Route path="login" element={currentUser ? <Home /> : <Login />} />
        <Route
          path="register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route path="write" element={currentUser ? <Write /> : <Register />} />
        <Route
          path="settings"
          element={currentUser ? <Settings /> : <Register />}
        />
        <Route path="/post/:postId" element={<Single />} />
        {/* <Route path="*" element={<noPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
