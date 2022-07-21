import React from "react";
import Description from "./Description.jsx";
import descriptionContent from "./descriptionContent.js";

function Projects() {

    return (
        <div>
            <div className='horizontal-page'>
                {/* don't think i need this className^ */}
                    <Description content={descriptionContent["projects-content"]}></Description>
            </div>
        </div>
    );
}

export default Projects;