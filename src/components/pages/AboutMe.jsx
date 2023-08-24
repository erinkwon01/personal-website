// entirety of aboutmy page content; all content is compiled here

import React from "react";
import Description from "../Description.jsx";
import descriptionContent from "../descriptionContent.js";

function AboutMe() {

    return (
        <Description content={descriptionContent["about-me-content"]} />
    );
}

export default AboutMe;