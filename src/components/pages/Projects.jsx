import React from "react";
import Description from "../Description.jsx";
import descriptionContent from "../descriptionContent.js";
import NavBar from "../NavBar.jsx";

function Projects() {

    return (
        <Description content={descriptionContent["projects-content"]}></Description>
    );
}

export default Projects;