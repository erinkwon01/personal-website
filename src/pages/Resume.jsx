import React from "react";
import erinResume from "../erinResume.pdf";
// import ResumeDescription from "../ResumeDescription.jsx";
// import descriptionContent from "../descriptionContent.js";

function Resume() {

    return (
        <div id="resume">
            <embed src={erinResume} width="900px" height="970px"/>
            {/* <ResumeDescription content={descriptionContent["resume-content"]}></ResumeDescription> */}
        </div>
    );
}

export default Resume;