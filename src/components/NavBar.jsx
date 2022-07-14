// compiling all the NavBarButtons to create the general nav bar; this can be reused in all pages
// uses type NavBarButton

import React from "react";
import NavBarButton from "./NavBarButton.jsx";

function NavBar (){
    return (
        <div id="nav-bar"> {/* assigns CSS to navbar section */}
            <NavBarButton buttonName="home"/>
            <NavBarButton buttonName="about me"/>
            <NavBarButton buttonName="resume"/>
            <NavBarButton buttonName="projects"/>
            <NavBarButton buttonName="contact"/>
        </div>
    );
};

export default NavBar;