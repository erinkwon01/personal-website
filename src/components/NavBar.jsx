// compiling all the NavBarButtons to create the general nav bar; this can be reused in all pages
// uses type NavBarButton

import React from "react";
import { Link } from "react-router-dom";
import NavBarButton from "./NavBarButton.jsx";

function NavBar () {
    return (
        <div id="nav-bar"> {/* assigns CSS to navbar section */}
            <Link to="/"><NavBarButton buttonName="home"/></Link>
            <Link to="/about-me"><NavBarButton buttonName="about me"/></Link>
            <Link to="/resume"><NavBarButton buttonName="resume"/></Link>
            <Link to="/projects"><NavBarButton buttonName="projects"/></Link>
            <Link to="/contact"><NavBarButton buttonName="contact"/></Link>
        </div>
    );
};

export default NavBar;