import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Services from "../pages/Services";
import Dashboard from "../pages/Dashboard";
import Login from "./Login";
import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
import { AuthContext } from "../Auth/AuthContext";
import NotesApp from "./NotesApp";
export default function Navbar() {
  const authInfo = useContext(AuthContext);
  const { username } = useParams();
  // const [isLoggedIn, SetIsLoggedIn] = useState(null);
  // const token = sessionStorage.getItem("token");
  // useEffect(() => {
  //   !token ? SetIsLoggedIn(false) : SetIsLoggedIn(true);
  // }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              {"Home"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              {" About Us"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              {" Contact Us"}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Services">
              {"Services"}
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/NotesApp">
              {"Notes"}
            </Link>
          </li> */}
          <li className="nav-item">
            {authInfo.isLoggedIn === true ? (
              <Link
                className="nav-link"
                label="Logout"
                onClick={() => authInfo.Logout()}
              >
                {"Logout"}
              </Link>
            ) : (
              <Link className="nav-link" to="/Login">
                {"Login"}
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        {/* <Route path="/NotesApp" element={<NotesApp />}></Route> */}
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Dashboard/:username" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
