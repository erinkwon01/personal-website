// entirety of aboutmy page content; all content is compiled here

import React from "react";
import Description from "./Description.jsx";
import descriptionContent from "./descriptionContent.js";

function AboutMe() {

    return (
        <div>
            <div className='horizontal-page'>
                {/* don't think i need this className^ */}
                    <Description content={descriptionContent["about-me-content"]}></Description>
            </div>
        </div>
    );
}

export default AboutMe;