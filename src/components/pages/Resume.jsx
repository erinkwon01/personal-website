import React from "react";
import ResumeDescription from "../ResumeDescription.jsx";
import descriptionContent from "../descriptionContent.js";

function Resume() {

    return (
        <div id="resume">
            <ResumeDescription content={descriptionContent["resume-content"]}></ResumeDescription>
        </div>
    );
}

export default Resume;