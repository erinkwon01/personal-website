import React from "react";
import Description from "../components/Description.jsx";
import descriptionContent from "../components/descriptionContent.js";

function Projects() {

    return (
        <Description content={descriptionContent["projects-content"]}></Description>
    );
}

export default Projects;