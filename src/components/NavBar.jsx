import React from "react";
import NavBarButton from "./NavBarButton.jsx";

function NavBar (){
    return (
        <div id="nav-bar">
            <NavBarButton buttonName="home"/>
            <NavBarButton buttonName="b"/>
            <NavBarButton buttonName="c"/>
            <NavBarButton buttonName="d"/>
        </div>
    );
};

export default NavBar;