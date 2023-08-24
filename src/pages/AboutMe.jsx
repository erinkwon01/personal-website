// entirety of aboutmy page content; all content is compiled here

import React from "react";
import Description from "../components/Description.jsx";
import descriptionContent from "../components/descriptionContent.js";

function AboutMe() {

    return (
        <Description content={descriptionContent["about-me-content"]} />
    );
}

export default AboutMe;