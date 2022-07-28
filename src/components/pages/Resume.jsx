import React from "react";
import Description from "../Description.jsx";
import descriptionContent from "../descriptionContent.js";
import NavBar from "../NavBar.jsx";

function Resume() {

    return (
        <Description content={descriptionContent["resume-content"]}></Description>
    );
}

export default Resume;