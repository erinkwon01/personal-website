// compiling all the NavBarButtons to create the general nav bar; this can be reused in all pages
// uses type NavBarButton

import React from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarButton.jsx";

// currentLocation="" use as another prop that u pass in
// conditional rendering

function NavBar () {
    return (
        <div id="nav-bar"> {/* assigns CSS to navbar section */}
            <Link to="/personal-website/"><NavBarButton buttonName="home" className="highlight"/></Link>
            <Link to="/about-me"><NavBarButton buttonName="about me" className="highlight"/></Link>
            <Link to="/resume"><NavBarButton buttonName="resume" className="highlight"/></Link>
            <Link to="/projects"><NavBarButton buttonName="projects" className="highlight"/></Link>
            <Link to="/contact"><NavBarButton buttonName="contact" className="highlight"/></Link>
        </div>
    );
};

export default NavBar;